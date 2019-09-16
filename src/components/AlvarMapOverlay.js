import _ from 'lodash';
import ReactDOM from 'react-dom';
import { message } from 'antd';
import React from 'react';
import axios from 'axios';
import {
  addOrUpdateLines,
  changeDynamicAttributes,
  posterSizeToMiddleLineStrokeWidth,
} from 'alvarcarto-common';
import { getStyle, getPosterLook } from '../util';
import config from '../config';
const { CancelToken } = axios;

// We are interested if the browser supports letter-spacing for SVG text elements
// This code assumes that all other browsers than Firefox supports it
const SUPPORTS_LETTER_SPACING = navigator.userAgent.toLowerCase().indexOf('firefox') === -1;

function getPoster(mapItem, axiosOpts) {
  const name = `${mapItem.posterStyle}-${mapItem.size}-${mapItem.orientation}.svg`;
  return axios.get(`${config.REACT_APP_RENDER_API_URL}/posters/${name}`, axiosOpts);
}

class AlvarMapOverlay extends React.Component {
  getInitialState() {
    return {
      cancelSource: null,
    };
  }

  componentDidMount() {
    this._fetchSvg(this.props.mapItem);
  }

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
  }

  render() {
    return <div ref="container" className="AlvarMapOverlay"></div>;
  }

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
  }

  _showLoader(container) {
    container.className += ' AlvarMapOverlay--loading';
  }

  _hideLoader(container) {
    container.className = 'AlvarMapOverlay';
  }

  _resetCancelSource() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.cancelSource = null;
  }

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

    changeDynamicAttributes(el.querySelector('svg'), mapItem);

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
            'stroke-width': posterSizeToMiddleLineStrokeWidth(mapItem.size),
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
  }
}

function updateText(textNode, value, opts = {}) {
  const tspanEl = _getFirstTspanElement(textNode);
  tspanEl.textContent = value;
  if (opts.color) {
    textNode.setAttribute('fill', opts.color);
  }

  if (!SUPPORTS_LETTER_SPACING) {
    _convertLetterSpacingToDx(textNode);
  }
}

function findParent(node, matcher) {
  let found = null;

  let currentNode = node;
  while (currentNode && currentNode.tagName !== 'svg') {
    if (currentNode && matcher(currentNode)) {
      found = currentNode;
      break;
    }

    currentNode = currentNode.parentNode;
  }

  return found;
}

function _convertLetterSpacingToDx(textEl) {
  if (!textEl) {
    return;
  }

  /*
  if original-letter-spacing defined for textEl:
    if letter-spacing not defined:
      set letter-spacing as 0
      use original-letter-spacing for dx
    if letter-spacing === '0':
      use original-letter-spacing for dx
    if letter-spacing > 0:
      // This means common has set the letter-spacing already
      set letter-spacing as 0
      use letter-spacing for dx
  else:
    find first letter-spacing in parent tree
    set original-letter-spacing with the found one
    use original-letter-spacing for dx
    set letter-spacing as 0
  */

  const origLetterSpacing = textEl.getAttribute('original-letter-spacing');
  if (origLetterSpacing) {
    const letterSpacing = textEl.getAttribute('letter-spacing');
    if (!letterSpacing || letterSpacing === '0') {
      return _setDxForText(textEl, origLetterSpacing);
    }

    // This means common module has set the letter-spacing already
    return _setDxForText(textEl, letterSpacing);
  }

  // This code is assuming that letter-spacing="0" evaluates as true.
  // It should evaluate as true.
  const foundEl = findParent(textEl, node => node.getAttribute('letter-spacing'));
  if (!foundEl) {
    // The whole parent tree doesn't have letter-spacing defined,
    // nothing to do here.
    return;
  }

  const newSpacing = foundEl.getAttribute('letter-spacing') || '0';
  textEl.setAttribute('original-letter-spacing', newSpacing);
  return _setDxForText(textEl, newSpacing);
}

function _setDxForText(textEl, letterSpacing) {
  // Enforce 0 as letter-spacing so that possible parent letter-spacing
  // will not have an effect
  textEl.setAttribute('letter-spacing', '0');

  const tspanEl = _getFirstTspanElement(textEl);
  const text = textEl.textContent.trim();
  const dxTail = _.repeat(` ${letterSpacing}`, text.length - 1);
  tspanEl.setAttribute('dx', `0${dxTail}`);
  tspanEl.removeAttribute('letter-spacing');
}

function _getFirstTspanElement(textNode) {
  const tspanList = textNode.getElementsByTagName('tspan');
  if (tspanList.length < 1) {
    throw new Error(`Unexpected amount of tspan elements found: ${tspanList.length}`);
  }

  return tspanList.item(0);
}

function getBBoxForSvgElement(svgElem) {
  return svgElem.getBBox();
}

export default AlvarMapOverlay;
