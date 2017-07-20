import _ from 'lodash';
import BPromise from 'bluebird';
import React from 'react';
import axios from 'axios';
import { Popconfirm, Button, Input, Icon, Form } from 'antd';
import { getPromotion } from '../util/api';
const { CancelToken } = axios;

function getPromotionSlow(code, axiosOpts) {
  return BPromise.delay(500).then(() => getPromotion(code, axiosOpts));
}

const AddPromotionLink = React.createClass({
  getInitialState() {
    return {
      loading: false,
      promotion: null,
      cancelSource: null,
      visible: false,
    };
  },

  componentWillMount() {
    this._debouncedCheckInput = _.debounce(this._checkInput, 300);
  },

  render() {
    return (
      <div className="AddPromotionLink">
        <Popconfirm
          overlayClassName="AddPromotionLink__popover"
          title={this._getContent()}
          onConfirm={this._onConfirm}
          okText="Apply"
          cancelText="Cancel"
        >
          <Button>Add promotion</Button>
        </Popconfirm>
      </div>
    );
  },

  _getContent() {
    let status;
    if (this.state.loading) {
      status = 'validating';
    } else if (_.isNull(this.state.promotion)) {
      status = '';
    } else if (_.isPlainObject(this.state.promotion)) {
      status = 'success';
    } else {
      status = 'error';
    }

    return <div className="AddPromotionLink__content">
      <p>Enter a promotion code</p>
      <Form>
        <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 0 }} hasFeedback validateStatus={status}>
          <Input
            className="AddPromotionLink__input"
            placeholder="YOUR CODE"
            onChange={this._onInputChange}
          />
        </Form.Item>
      </Form>
    </div>;
  },

  _onConfirm() {
    if (_.isFunction(this.props.onPromotionApply)) {
      this.props.onPromotionApply(this.promotion);
    }
  },

  _onInputChange(e) {
    const inputValue = e.target.value;
    this.setState({
      inputValue,
      loading: true,
    });

    if (_.isEmpty(inputValue)) {
      this._cancelRequest();
      return this.setState({ promotion: null, loading: false });
    }

    this._debouncedCheckInput();
  },

  _checkInput() {
    const { inputValue } = this.state;
    if (!inputValue) {
      return;
    }

    this._cancelRequest();
    const source = CancelToken.source();
    this.setState({ cancelSource: source });
    this.setState({ loading: true });

    getPromotionSlow(inputValue, { cancelToken: source.token })
      .then(res => {
        this.setState({
          promotion: res.data,
          loading: false,
        });
        this._resetCancelSource();
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          // Cancel happens only when another request is made
          // so we don't have to switch off the loading state in
          // between
          // We should not reset cancel source in this case
          return;
        }

        this.setState({
          promotion: err,
          loading: false,
        });
        this._resetCancelSource();
      });
  },

  _cancelRequest() {
    if (this.state.cancelSource) {
      // If cancelSource exists, previous request is on-going
      this.state.cancelSource.cancel();
    }
  },

  _resetCancelSource() {
    this.setState({ cancelSource: null });
  }
});

export default AddPromotionLink;
