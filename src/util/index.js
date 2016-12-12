import _ from 'lodash';
import { oneLineTrim } from 'common-tags';

function posterSizeToPixels(size, orientation) {
  let dimensions;
  switch (size) {
    case '50x70cm':
      dimensions = { width: 400, height: 560 };
      break;
    case '70x100cm':
      dimensions = { width: 392, height: 560 };
      break;
    case '30x40cm':
      dimensions = { width: 375, height: 500 };
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

  return oneLineTrim`
    ?lat=${state.mapCenter.lat}
    &lng=${state.mapCenter.lng}
    &zoom=${state.mapZoom}
    &style=${state.mapStyle}
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

module.exports = {
  posterSizeToPixels,
  posterSizeToPhysicalDimensions,
  createApiUrlQuery,
  coordToPrettyText,
};
