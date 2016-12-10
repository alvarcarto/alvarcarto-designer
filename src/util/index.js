import _ from 'lodash';

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
};
