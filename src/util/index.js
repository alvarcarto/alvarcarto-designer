import _ from 'lodash';
import { oneLineTrim } from 'common-tags';
import config from '../config';

const STYLES = [
  {
    id: 'bw',
    type: 'raster',
    image: `${config.PUBLIC_URL}/assets/bw@2x.png`,
    url: `${config.REACT_APP_TILE_API_URL}/bw/{z}/{x}/{y}/tile.png`,
    name: 'B & W',
  },
  {
    id: 'mapbox-orange',
    type: 'vector',
    image: `${config.PUBLIC_URL}/assets/orange@2x.png`,
    url: 'mapbox://styles/alvarcarto/ciwknyyct00lw2pmq9ohha4bg',
    name: 'Orange',
  }
];

function posterSizeToPixels(size, orientation) {
  let dimensions;
  switch (size) {
    case '50x70cm':
      dimensions = { width: 600, height: 840, zoom: 1 };
      break;
    case '70x100cm':
      dimensions = { width: 840, height: 1200, zoom: 1 };
      break;
    case '30x40cm':
      dimensions = { width: 420, height: 560, zoom: 1 };
      break;
    default:
      throw new Error(`Unknown size: ${size}`);
  }

  return _resolveOrientation(dimensions, orientation);
}

function posterSizeToPhysicalDimensions(size, orientation) {
  let dimensions;

  switch (size) {
    case '50x70cm':
      dimensions = { width: 50, height: 70, unit: 'cm' };
      break;
    case '70x100cm':
      dimensions = { width: 70, height: 100, unit: 'cm' };
      break;
    case '30x40cm':
      dimensions = { width: 30, height: 40, unit: 'cm' };
      break;
    default:
      throw new Error(`Unknown size: ${size}`);
  }

  return _resolveOrientation(dimensions, orientation);
}

function createApiUrlQuery(state) {
  const dimensions = posterSizeToPixels(state.size, state.orientation);
  const style = getStyle(state.mapStyle);

  return oneLineTrim`
    ?lat=${state.mapCenter.lat}
    &lng=${state.mapCenter.lng}
    &zoom=${state.mapZoom}
    &styleType=${style.type}
    &stylUrl=${style.url}
    &pitch=${state.mapPitch}
    &bearing=${state.mapBearing}
    &width=${dimensions.width}
    &height=${dimensions.height}
  `;
}

function coordToPrettyText(coord) {
  const first = {
    val: Math.abs(coord.lat).toFixed(3),
    label: coord.lat > 0 ? 'N' : 'S',
  };

  const second = {
    val: Math.abs(coord.lng).toFixed(3),
    label: coord.lng > 0 ? 'E' : 'W',
  };

  return `${first.val}°${first.label} / ${second.val}°${second.label}`;
}

function _resolveOrientation(dimensions, orientation) {
  if (orientation === 'landscape') {
    return _.merge({}, dimensions, {
      width: dimensions.height,
      height: dimensions.width,
    });
  }

  return dimensions;
}

function getStyle(styleId) {
  return _.find(STYLES, { id: styleId });
}

function getStyles() {
  return STYLES;
}

module.exports = {
  posterSizeToPixels,
  posterSizeToPhysicalDimensions,
  createApiUrlQuery,
  coordToPrettyText,
  getStyle,
  getStyles,
};
