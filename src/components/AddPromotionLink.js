import _ from 'lodash';
import BPromise from 'bluebird';
import React from 'react';
import axios from 'axios';
import { Modal, Button, Input, Icon, Form } from 'antd';
import { getPromotion } from '../util/api';
import ButtonLink from './ButtonLink'
const { CancelToken } = axios;

function getPromotionSlow(code, axiosOpts) {
  // Delay to feel more natural to the user (time to show loader)
  return BPromise.delay(400).then(() => getPromotion(code, axiosOpts));
}

class AddPromotionLink extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      promotion: null,
      cancelSource: null,
      visible: false,
    };
  }

  componentDidMount() {
    this._debouncedCheckInput = _.debounce(this._checkInput, 400);
  }

  render() {
    return (
      <ButtonLink className="AddPromotionLink" onClick={this._showModal}>
        Add promotion

        <Modal
          visible={this.state.visible}
          width={260}
          title={<div>
            <Icon type="gift" /> Add promotion
          </div>}
          wrapClassName="AddPromotionLink__modal"
          onCancel={this._onCancel}
          footer={[
            <Button key="cancel" onClick={this._onCancel}>Cancel</Button>,
            <Button
              key="apply"
              type="primary"
              disabled={!_.isPlainObject(this.state.promotion)}
              onClick={this._onApply}
            >
              Add
            </Button>,
          ]}
        >
          {this._getContent()}
        </Modal>
      </ButtonLink>
    );
  }

  _getContent = () => {
    const { promotion } = this.state;
    let status;
    if (this.state.loading) {
      status = 'validating';
    } else if (_.isNull(promotion)) {
      status = '';
    } else if (_.isPlainObject(promotion)) {
      status = 'success';
    } else {
      status = 'error';
    }

    return <div className="AddPromotionLink__content">
      <p>Enter a promotion code for a discount</p>
      <Form>
        <Form.Item
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 0 }}
          hasFeedback
          validateStatus={status}
          help={status === 'error' ? 'Promotion code is not valid' : null}
        >
          <Input
            className="AddPromotionLink__input"
            placeholder="YOUR CODE"
            onChange={this._onInputChange}
          />
        </Form.Item>
      </Form>
    </div>;
  };

  _showModal = () => {
    this.setState({ visible: true });
  };

  _onCancel = (e) => {
    e.stopPropagation();
    this.setState({ visible: false });
  };

  _onApply = () => {
    if (_.isFunction(this.props.onPromotionApply)) {
      this.props.onPromotionApply(this.state.promotion);
    }

    this.setState({ visible: false });
  };

  _onInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue: inputValue.toUpperCase(),
      loading: true,
    });

    if (_.isEmpty(inputValue)) {
      this._cancelRequest();
      return this.setState({ promotion: null, loading: false });
    }

    this._debouncedCheckInput();
  };

  _checkInput = () => {
    const { inputValue } = this.state;
    if (!inputValue) {
      return;
    }

    this._cancelRequest();
    const source = CancelToken.source();
    this.setState({ cancelSource: source });
    this.setState({ loading: true });

    getPromotionSlow(inputValue, {
      params: { expiredAsOk: 'false' },
      cancelToken: source.token,
    })
      .then(res => {
        const promotion = res.data;
        const isValid = promotion.type === 'PERCENTAGE' ||
          promotion.currency === this.props.currency;

        if (isValid) {
          this.setState({
            promotion: res.data,
            loading: false,
          });
        } else {
          this.setState({
            promotion: new Error(`Mismatch between selected and promotion's currencies`),
            loading: false,
          });
        }
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
  };

  _cancelRequest = () => {
    if (this.state.cancelSource) {
      // If cancelSource exists, previous request is on-going
      this.state.cancelSource.cancel();
    }
  };

  _resetCancelSource = () => {
    this.setState({ cancelSource: null });
  };
}

export default AddPromotionLink;
