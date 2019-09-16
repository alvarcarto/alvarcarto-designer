import _ from 'lodash';
import qs from 'qs';
import config from '../config';
import geolib from 'geolib';
import { POSTER_STYLES, MAP_STYLES, resolveOrientation } from 'alvarcarto-common';

export function posterSizeToPixels(size, orientation) {
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
    case '12x18inch':
      dimensions = { width: 340, height: 510, clipScale: 1 };
      break;
    case '18x24inch':
      dimensions = { width: 435, height: 580, clipScale: 0.9 };
      break;
    case '24x36inch':
      dimensions = { width: 420, height: 630, clipScale: 0.8 };
      break;
    default:
      throw new Error(`Unknown size: ${size}`);
  }

  return resolveOrientation(dimensions, orientation);
}

export function posterSizeToThumbnailPixels(size, orientation) {
  let dimensions;

  switch (size) {
    case '30x40cm':
      dimensions = { width: 30, height: 40 };
      break;
    case '50x70cm':
      dimensions = { width: 32, height: 45 };
      break;
    case '70x100cm':
      dimensions = { width: 35, height: 50 };
      break;
    case '12x18inch':
      dimensions = { width: 30, height: 45 };
      break;
    case '18x24inch':
      dimensions = { width: 33, height: 45 };
      break;
    case '24x36inch':
      dimensions = { width: 33, height: 50 };
      break;
    default:
      throw new Error(`Unknown size: ${size}`);
  }

  return resolveOrientation(dimensions, orientation);
}

export function createPosterUrlParameters(mapItem) {
  return {
    swLat: _.get(mapItem, 'mapBounds.southWest.lat'),
    swLng: _.get(mapItem, 'mapBounds.southWest.lng'),
    neLat: _.get(mapItem, 'mapBounds.northEast.lat'),
    neLng: _.get(mapItem, 'mapBounds.northEast.lng'),
    mapStyle: mapItem.mapStyle,
    posterStyle: mapItem.posterStyle,
    size: mapItem.size,
    orientation: mapItem.orientation,
    labelsEnabled: mapItem.labelsEnabled,
    labelHeader: mapItem.labelHeader,
    labelSmallHeader: mapItem.labelSmallHeader,
    labelText: mapItem.labelText,
  };
}

export function createPosterImageUrl(mapItem) {
  const query = qs.stringify(createPosterUrlParameters(mapItem));
  return `${config.REACT_APP_RENDER_API_URL}/api/raster/render?${query}`;
}

export function createPlacementImageUrl(id, mapItem) {
  const params = createPosterUrlParameters(mapItem)
  const query = qs.stringify(_.omit(params, ['size', 'orientation']));
  return `${config.REACT_APP_PLACEMENT_API_URL}/api/place-map/${id}?${query}`;
}

export function createPosterPreviewUrl(mapItem) {
  const query = qs.stringify(createPosterUrlParameters(mapItem));
  return [
    `${config.REACT_APP_RENDER_API_URL}/api/raster/placeit?${query}`,
    '&frames=black&resizeToHeight=1000',
  ].join('');
}

export function createPosterThumbnailUrl(mapItem) {
  const query = qs.stringify(createPosterUrlParameters(mapItem));
  return `${config.REACT_APP_RENDER_API_URL}/api/raster/render?${query}&resizeToHeight=140`;
}

export function coordToPrettyText(coord) {
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

function _transformStyle(styleObj) {
  return _.extend({}, styleObj, {
    url: `${config.REACT_APP_TILE_API_URL}/${styleObj.id}/{z}/{x}/{y}/tile.png`,
  });
}

export function getStyle(styleId) {
  const found = _.find(MAP_STYLES, { id: styleId });
  if (found) {
    return _transformStyle(found);
  }

  return null;
}

export function getStyles() {
  return _.map(MAP_STYLES, _transformStyle);
}

function _transformPosterStyle(styleObj) {
  return _.extend({}, styleObj, {
    icon: `${config.PUBLIC_URL}/assets/${styleObj.id}-style-icon.svg`,
  });
}

export function getPosterLook(id) {
  const found = _.find(POSTER_STYLES, { id: id });
  if (found) {
    return _transformPosterStyle(found);
  }

  return null;
}

export function getPosterLooks() {
  return _.map(POSTER_STYLES, _transformPosterStyle);
}

export function getStorageSafe(key) {
  let result;
  try {
    result = localStorage.getItem(key);
  } catch (e) {
    // Ignore
  }

  return result;
}

export function setStorageSafe(key, val) {
  let success = false;
  try {
    localStorage.setItem(key, val);
    success = true;
  } catch (e) {
    // Ignore error, this happens in safari private mode
  }

  return success;
}

export function getQueryParameterByName(name) {
  const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function getQuery(name, type, defaultVal, allowList) {
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

export function parseStringQuery(found, defaultVal, allowList) {
  if (!isAllowed(allowList, found)) {
    return defaultVal;
  }
  return found;
}

export function parseFloatQuery(found, defaultVal) {
  const val = Number(found);
  if (!_.isFinite(val)) {
    return defaultVal;
  }
  return val;
}

export function parseIntegerQuery(found, defaultVal) {
  const val = parseInt(found, 10);
  if (!_.isFinite(val)) {
    return defaultVal;
  }
  return val;
}

export function parseBooleanQuery(found) {
  return found === 'true';
}

export function isAllowed(allowList, val) {
  if (!allowList) {
    return true;
  }

  return _.includes(allowList, val);
}

export function stringEqualsIgnoreWhitespace(str1, str2) {
  if (!_.isString(str1) || !_.isString(str2)) {
    return false;
  }

  const str1Trimmed = str1.replace(/\s/g, '');
  const str2Trimmed = str2.replace(/\s/g, '');
  return str1Trimmed.toLowerCase() === str2Trimmed.toLowerCase();
}

export function getCenterOfCoordinates(coords) {
  const newCoords = _.map(coords, coord => ({
    latitude: coord.lat,
    longitude: coord.lng,
  }));
  const center = geolib.getCenter(newCoords);

  return { lat: Number(center.latitude), lng: Number(center.longitude) };
}
