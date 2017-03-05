const ReactDOM = require('react-dom');
const { message } = require('antd');
const React = require('react');
const axios = require('axios');
import config from '../config';
const { CancelToken } = axios;

function getPoster(mapItem, axiosOpts) {
  const name = `${mapItem.mapStyle}-${mapItem.size}-${mapItem.orientation}.svg`;
  return axios.get(`${config.REACT_APP_RENDER_API_URL}/posters/${name}`, axiosOpts);
}

const AlvarMapOverlay = React.createClass({
  getInitialState() {
    return {
      cancelSource: null,
    };
  },

  componentDidMount() {
    this._fetchSvg(this.props.mapItem);
  },

  componentWillReceiveProps(nextProps) {
    const oldItem = this.props.mapItem;
    const nextItem = nextProps.mapItem;
    const hasChanged =
      oldItem.mapStyle !== nextItem.mapStyle ||
      oldItem.size !== nextItem.size ||
      oldItem.orientation !== nextItem.orientation;

    if (hasChanged) {
      this._fetchSvg(nextItem);
    }

    this._updateLabels(nextItem);
  },

  render() {
    return <div ref="container" className="AlvarMapOverlay"></div>;
  },

  _fetchSvg(mapItem) {
    const container = ReactDOM.findDOMNode(this.refs.container);
    this._showLoader(container);

    if (this.state.cancelSource) {
      // If cancelSource exists, previous request is on-going
      this.state.cancelSource.cancel();
    }

    const source = CancelToken.source();
    this.state.cancelSource = source;  // Avoid causing re-render

    getPoster(mapItem, { cancelToken: source.token })
      .then(res => {
        container.innerHTML = res.data;
        this._updateLabels(mapItem);
        this._hideLoader(container);
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

        message.error('Unable to load poster', 3);
        container.className += ' AlvarMapOverlay--error';
        this._resetCancelSource();
      });
  },

  _showLoader(container) {
    container.className += ' AlvarMapOverlay--loading';
  },

  _hideLoader(container) {
    container.className = 'AlvarMapOverlay';
  },

  _resetCancelSource() {
    this.state.cancelSource = null;
  },

  _updateLabels(mapItem) {
    const el = ReactDOM.findDOMNode(this.refs.container);
    if (!el.querySelector('svg')) {
      // SVG has not yet loaded
      return;
    }

    setText(el.querySelector('#header'), mapItem.labelHeader.toUpperCase());
    setText(el.querySelector('#small-header'), mapItem.labelSmallHeader.toUpperCase());
    setText(el.querySelector('#text'), mapItem.labelText.toUpperCase());
  }
})

function setText(textNode, value) {
  const tspanList = textNode.getElementsByTagName('tspan');
  if (tspanList.length < 1) {
    throw new Error(`Unexpected amount of tspan elements found: ${tspanList.length}`);
  }

  tspanList.item(0).textContent = value;
}

module.exports = AlvarMapOverlay;