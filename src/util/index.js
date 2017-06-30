import _ from 'lodash';
import { oneLineTrim } from 'common-tags';
import config from '../config';
import geolib from 'geolib';
import { POSTER_STYLES, MAP_STYLES } from 'alvarcarto-common';

function posterSizeToPixels(size, orientation) {
  let dimensions;
  switch (size) {
    case '30x40cm':
      dimensions = { width: 375, height: 500, clipScale: 1 };
      break;
    case '50x70cm':
      dimensions = { width: 420, height: 588, clipScale: 0.9 };
      break;
    case '70x100cm':
      dimensions = { width: 448, height: 640, clipScale: 0.8 };
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

function createPosterImageUrl(mapItem) {
  return oneLineTrim`
    ${config.REACT_APP_RENDER_API_URL}/api/raster/render
    ?swLat=${_.get(mapItem, 'mapBounds.southWest.lat')}
    &swLng=${_.get(mapItem, 'mapBounds.southWest.lng')}
    &neLat=${_.get(mapItem, 'mapBounds.northEast.lat')}
    &neLng=${_.get(mapItem, 'mapBounds.northEast.lng')}
    &mapStyle=${mapItem.mapStyle}
    &posterStyle=${mapItem.posterStyle}
    &size=${mapItem.size}
    &orientation=${mapItem.orientation}
    &labelsEnabled=${mapItem.labelsEnabled}
    &labelHeader=${mapItem.labelHeader}
    &labelSmallHeader=${mapItem.labelSmallHeader}
    &labelText=${mapItem.labelText}
  `;
}

function createPosterThumbnailUrl(mapItem) {
  return `${createPosterImageUrl(mapItem)}&resizeToHeight=140`;
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

function _transformStyle(styleObj) {
  return _.extend({}, styleObj, {
    url: `${config.REACT_APP_TILE_API_URL}/${styleObj.id}/{z}/{x}/{y}/tile.png`,
  });
}

function getStyle(styleId) {
  const found = _.find(MAP_STYLES, { id: styleId });
  if (found) {
    return _transformStyle(found);
  }

  return null;
}

function getStyles() {
  return _.map(MAP_STYLES, _transformStyle);
}

function _transformPosterStyle(styleObj) {
  return _.extend({}, styleObj, {
    icon: `${config.PUBLIC_URL}/assets/${styleObj.id}-style-icon.svg`,
  });
}

function getPosterLook(id) {
  const found = _.find(POSTER_STYLES, { id: id });
  if (found) {
    return _transformPosterStyle(found);
  }

  return null;
}

function getPosterLooks() {
  return _.map(POSTER_STYLES, _transformPosterStyle);
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

function getQueryParameterByName(name) {
  const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getQuery(name, type, defaultVal, allowList) {
  const found = getQueryParameterByName(name);
  if (_.isNull(found) || _.isUndefined(found)) {
    return defaultVal;
  }

  switch (type) {
    case 'string':
      return parseStringQuery(found, defaultVal, allowList);
    case 'float':
      return parseFloatQuery(found, defaultVal);
    case 'integer':
      return parseIntegerQuery(found, defaultVal);
    case 'boolean':
      return parseBooleanQuery(found);
    default:
      return defaultVal;
  }
}

function parseStringQuery(found, defaultVal, allowList) {
  if (!isAllowed(allowList, found)) {
    return defaultVal;
  }
  return found;
}

function parseFloatQuery(found, defaultVal) {
  const val = Number(found);
  if (!_.isFinite(val)) {
    return defaultVal;
  }
  return val;
}

function parseIntegerQuery(found, defaultVal) {
  const val = parseInt(found, 10);
  if (!_.isFinite(val)) {
    return defaultVal;
  }
  return val;
}

function parseBooleanQuery(found) {
  return found === 'true';
}

function isAllowed(allowList, val) {
  if (!allowList) {
    return true;
  }

  return _.includes(allowList, val);
}

function stringEqualsIgnoreWhitespace(str1, str2) {
  if (!_.isString(str1) || !_.isString(str2)) {
    return false;
  }

  const str1Trimmed = str1.replace(/\s/g, '');
  const str2Trimmed = str2.replace(/\s/g, '');
  return str1Trimmed.toLowerCase() === str2Trimmed.toLowerCase();
}

function getCenterOfCoordinates(coords) {
  const newCoords = _.map(coords, coord => ({
    latitude: coord.lat,
    longitude: coord.lng,
  }));
  const center = geolib.getCenter(newCoords);

  return { lat: Number(center.latitude), lng: Number(center.longitude) };
}

module.exports = {
  posterSizeToPixels,
  posterSizeToPhysicalDimensions,
  createPosterImageUrl,
  createPosterThumbnailUrl,
  coordToPrettyText,
  getStyle,
  getStyles,
  getPosterLook,
  getPosterLooks,
  getStorageSafe,
  setStorageSafe,
  getQueryParameterByName,
  getQuery,
  stringEqualsIgnoreWhitespace,
  getCenterOfCoordinates,
};
