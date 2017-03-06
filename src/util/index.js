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

function createPosterThumbnailUrl(mapItem) {
  return oneLineTrim`
    ${config.REACT_APP_RENDER_API_URL}/api/raster/render
    ?swLat=${mapItem.mapBounds.southWest.lat}
    &swLng=${mapItem.mapBounds.southWest.lng}
    &neLat=${mapItem.mapBounds.northEast.lat}
    &neLng=${mapItem.mapBounds.northEast.lng}
    &style=${mapItem.mapStyle}
    &size=${mapItem.size}
    &orientation=${mapItem.orientation}
    &labelsEnabled=${mapItem.labelsEnabled}
    &labelHeader=${mapItem.labelHeader.toUpperCase()}
    &labelSmallHeader=${mapItem.labelSmallHeader.toUpperCase()}
    &labelText=${mapItem.labelText.toUpperCase()}
    &resizeToHeight=140
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

function getStorageSafe(key) {
  let result;
  try {
    result = localStorage.getItem(key);
  } catch (e) {
    // Ignore
  }

  return result;
}

function setStorageSafe(key, val) {
  let success = false;
  try {
    localStorage.setItem(key, val);
    success = true;
  } catch (e) {
    // Ignore error, this happens in safari private mode
  }

  return success;
}

module.exports = {
  posterSizeToPixels,
  posterSizeToPhysicalDimensions,
  createPosterThumbnailUrl,
  coordToPrettyText,
  getStyle,
  getStyles,
  getStorageSafe,
  setStorageSafe,
};
