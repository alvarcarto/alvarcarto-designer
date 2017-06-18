import _ from 'lodash';
import ReactDOM from 'react-dom';
import { message } from 'antd';
import React from 'react';
import axios from 'axios';
import { addOrUpdateLines, changeDynamicAttributes } from 'alvarcarto-common';
import { getStyle, getPosterLook } from '../util';
import config from '../config';
const { CancelToken } = axios;

function getPoster(mapItem, axiosOpts) {
  const styleObj = getStyle(mapItem.mapStyle);
  const name = `${mapItem.posterStyle}-${mapItem.size}-${mapItem.orientation}.svg`;
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
      oldItem.posterStyle !== nextItem.posterStyle ||
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
    // eslint-disable-next-line react/no-direct-mutation-state
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
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.cancelSource = null;
  },

  _updateLabels(mapItem) {
    const el = ReactDOM.findDOMNode(this.refs.container);
    if (!el.querySelector('svg')) {
      // SVG has not yet loaded
      return;
    }

    const posterLook = getPosterLook(mapItem.posterStyle);
    const { upperCaseLabels } = posterLook;
    const styleObj = getStyle(mapItem.mapStyle);
    const { labelColor } = styleObj;

    const labelHeader = upperCaseLabels
      ? mapItem.labelHeader.toUpperCase()
      : mapItem.labelHeader;
    updateText(el.querySelector('#header'), labelHeader, { color: labelColor });

    const smallHeaderEl = el.querySelector('#small-header');
    if (smallHeaderEl) {
      const labelSmallHeader = upperCaseLabels
        ? mapItem.labelSmallHeader.toUpperCase()
        : mapItem.labelSmallHeader;
      updateText(smallHeaderEl, labelSmallHeader, { color: labelColor });

      if (posterLook.addLines) {
        addOrUpdateLines(document, el.querySelector('svg'), smallHeaderEl, {
          getBBoxForSvgElement: getBBoxForSvgElement,
          svgAttributes: {
            stroke: '#2d2d2d',
            'stroke-width': '6px',
            'stroke-linecap': 'square',
          },
          debugLines: false
        });
      }
    }

    const textEl = el.querySelector('#text');
    if (textEl) {
      const labelText = upperCaseLabels
        ? mapItem.labelText.toUpperCase()
        : mapItem.labelText;
      updateText(textEl, labelText, { color: labelColor });
    }

    changeDynamicAttributes(el.querySelector('svg'), mapItem);
  }
})

function updateText(textNode, value, opts = {}) {
  const tspanList = textNode.getElementsByTagName('tspan');
  if (tspanList.length < 1) {
    throw new Error(`Unexpected amount of tspan elements found: ${tspanList.length}`);
  }

  tspanList.item(0).textContent = value;
  if (opts.color) {
    textNode.setAttribute('fill', opts.color);
  }
}

function getBBoxForSvgElement(svgElem) {
  return svgElem.getBBox();
}

module.exports = AlvarMapOverlay;