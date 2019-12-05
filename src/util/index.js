import _ from 'lodash';
import qs from 'qs';
import geolib from 'geolib';
import currencyFormatter from 'currency-formatter';
import { POSTER_STYLES, MAP_STYLES, resolveOrientation } from 'alvarcarto-common';
import CONST from '../constants';
import config from '../config';

const dimensionsToPixels = {
  '30x40cm': { width: 300 * 1.5, height: 400 * 1.5, clipScale: 1 },
  '50x70cm': { width: 500 * 1.2, height: 700 * 1.2, clipScale: 0.9 },
  '70x100cm': { width: 700, height: 1000, clipScale: 0.8 },
  '12x18inch': { width: Math.round(12 * 2.54 * 10 * 1.5), height: Math.round(18 * 2.54 * 10 * 1.5), clipScale: 1 },
  '18x24inch': { width: Math.round(18 * 2.54 * 10 * 1.2), height: Math.round(24 * 2.54 * 10 * 1.2), clipScale: 0.9 },
  '24x36inch': { width: Math.round(24 * 2.54 * 10), height: Math.round(36 * 2.54 * 10), clipScale: 0.8 },
}

export function posterSizeToPixels(size, orientation, fitToArea) {
  if (!_.has(dimensionsToPixels, size)) {
    throw new Error(`Unknown size: ${size}`);
  }

  if (!fitToArea) {
    const pixelInfo = dimensionsToPixels[size];
    return resolveOrientation(pixelInfo, orientation);
  }
  const requestedPixelInfo = dimensionsToPixels[size];

  if (!fitToArea.width <= CONST.SCREEN_MD) {
    const mobileRatio = calculateAspectRatioFit(
      requestedPixelInfo.width,
      requestedPixelInfo.height,
      fitToArea.width,
      fitToArea.height
    )
    return resolveOrientation({
      width: Math.round(requestedPixelInfo.width * mobileRatio),
      height: Math.round(requestedPixelInfo.height * mobileRatio),
      clipScale: requestedPixelInfo.clipScale,
    }, orientation);
  }

  // Find the poster which would need most scaling down which means the largest poster size
  // This poster will be the max size and others are then scaled down from that
  const arr = _.map(dimensionsToPixels, (val, key) => ({ val, key }))
  const largestPixelInfo = _.minBy(arr, ({ val }) => {
    const ratio = calculateAspectRatioFit(val.width, val.height, fitToArea.width, fitToArea.height)
    return ratio
  }).val

  const largestRatio = calculateAspectRatioFit(
    largestPixelInfo.width,
    largestPixelInfo.height,
    fitToArea.width,
    fitToArea.height
  )
  const largestWidth = largestPixelInfo.width * largestRatio
  const largestHeight = largestPixelInfo.height * largestRatio

  const scaledPixelInfo = {
    width: Math.round(requestedPixelInfo.width / largestPixelInfo.width * largestWidth),
    height: Math.round(requestedPixelInfo.height / largestPixelInfo.height * largestHeight),
    clipScale: requestedPixelInfo.clipScale,
  }

  return resolveOrientation(scaledPixelInfo, orientation);
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

export function sizeToPosterSku(size) {
  return `custom-map-print-${size}`;
}

export function isMapSku(sku) {
  return _.startsWith(sku, 'custom-map');
}

export function filterMapPosterCart(cart) {
  return _.filter(cart, item => _.startsWith(item.sku, 'custom-map'));
}

export function filterOtherItemsCart(cart) {
  return _.filter(cart, item => !_.startsWith(item.sku, 'custom-map'));
}

export function currencyToSymbol(currency) {
  return currencyFormatter.findCurrency(currency.toUpperCase()).symbol;
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
    resizeToWidth: _.get(mapItem, 'resizeToWidth', 800),
  };
}

export function createPosterImageUrl(mapItem) {
  const query = qs.stringify(_.omit(createPosterUrlParameters(mapItem), ['resizeToWidth']));
  return `${config.REACT_APP_RENDER_API_URL}/api/raster/render?${query}`;
}

export function createPlacementImageUrl(id, mapItem) {
  const params = createPosterUrlParameters(mapItem);
  const toOmit = ['size', 'orientation'];
  if (!mapItem.resizeToWidth) {
    toOmit.push('resizeToWidth');
  }
  const query = qs.stringify(_.omit(params, toOmit));
  return `${config.REACT_APP_PLACEMENT_API_URL}/api/place-map/${id}?${query}`;
}

export function createPosterThumbnailUrl(mapItem) {
  const newMapItem = _.extend({}, mapItem, { resizeToHeight: 140 })
  const query = qs.stringify(createPosterUrlParameters(newMapItem));
  return `${config.REACT_APP_RENDER_API_URL}/api/raster/render?${query}`;
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

  if (getQueryParameterByName('debug') === 'true') {
    return _transformStyle({
      id: styleId,
      color: '#000000',
      labelColor: '#000000',
      type: 'raster',
      name: 'Unknown',
    });
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

/**
 * Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 *
 * @param {Number} srcWidth Source area width
 * @param {Number} srcHeight Source area height
 * @param {Number} maxWidth Fittable area maximum available width
 * @param {Number} maxHeight Fittable area maximum available height
 * @return {Number} ratio to multiple src dimensions to get perfect fit
 */
export function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  return Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
}
