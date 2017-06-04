import _ from 'lodash';
import { oneLineTrim } from 'common-tags';
import config from '../config';

const POSTER_LOOKS = [
  /*{
    id: 'classic',
    allowedMapStyles: ['bw', 'gray', 'black'],
    upperCaseLabels: true,
    labels: ['header', 'smallHeader', 'text'],
    icon: `${config.PUBLIC_URL}/assets/classic-style-icon.svg`,
    name: 'Classic',
  },*/
  {
    id: 'bw',
    allowedMapStyles: ['bw', 'gray', 'black'],
    upperCaseLabels: true,
    labels: ['header', 'smallHeader', 'text'],
    icon: `${config.PUBLIC_URL}/assets/modern-style-icon.svg`,
    name: 'Modern',
  },
  {
    id: 'sharp',
    upperCaseLabels: true,
    labels: ['header'],
    icon: `${config.PUBLIC_URL}/assets/sharp-style-icon.svg`,
    name: 'Sharp',
  },
  {
    id: 'pacific',
    upperCaseLabels: false,
    labels: ['header'],
    icon: `${config.PUBLIC_URL}/assets/pacific-style-icon.svg`,
    name: 'Pacific',
  },
  {
    id: 'summer',
    upperCaseLabels: true,
    labels: ['header'],
    icon: `${config.PUBLIC_URL}/assets/summer-style-icon.svg`,
    name: 'Summer',
  },
  {
    id: 'round',
    upperCaseLabels: true,
    labels: ['header'],
    icon: `${config.PUBLIC_URL}/assets/round-style-icon.svg`,
    name: 'Round',
  },
];

const MAP_STYLES = [
  {
    id: 'bw',
    color: '#fff',
    labelColor: '#000',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/bw/{z}/{x}/{y}/tile.png`,
    name: 'White',
  },
  {
    id: 'gray',
    color: '#ddd',
    labelColor: '#000',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/gray/{z}/{x}/{y}/tile.png`,
    name: 'Gray',
  },
  {
    id: 'black',
    color: '#000',
    labelColor: '#000',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/black/{z}/{x}/{y}/tile.png`,
    name: 'Black',
  },
  {
    id: 'petrol',
    color: '#4b7b8f',
    labelColor: '#4b7b8f',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/petrol/{z}/{x}/{y}/tile.png`,
    name: 'Petrol',
  },
  {
    id: 'pastel-blue',
    color: '#94D5E0',
    labelColor: '#94D5E0',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/pastel-blue/{z}/{x}/{y}/tile.png`,
    name: 'Pastel blue',
  },
  {
    id: 'cotton',
    color: '#FFB8D4',
    labelColor: '#FFB8D4',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/cotton/{z}/{x}/{y}/tile.png`,
    name: 'Cotton',
  },
  {
    id: 'copper',
    color: '#DE8E65',
    labelColor: '#DE8E65',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/copper/{z}/{x}/{y}/tile.png`,
    name: 'Copper',
  },
  {
    id: 'pastel-green',
    color: '#BDECB6',
    labelColor: '#BDECB6',
    type: 'raster',
    url: `${config.REACT_APP_TILE_API_URL}/pastel-green/{z}/{x}/{y}/tile.png`,
    name: 'Pastel green',
  }
];

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

function getStyle(styleId) {
  return _.find(MAP_STYLES, { id: styleId });
}

function getStyles() {
  return MAP_STYLES;
}

function getPosterLook(id) {
  return _.find(POSTER_LOOKS, { id: id });
}

function getPosterLooks() {
  return POSTER_LOOKS;
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

function stringEqualsIgnoreWhitespace(str1, str2) {
  if (!_.isString(str1) || !_.isString(str2)) {
    return false;
  }

  const str1Trimmed = str1.replace(/\s/g, '');
  const str2Trimmed = str2.replace(/\s/g, '');
  return str1Trimmed.toLowerCase() === str2Trimmed.toLowerCase();
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
  stringEqualsIgnoreWhitespace,
};
