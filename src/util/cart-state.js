import _ from 'lodash';
import {
  POSTER_STYLES,
  POSTER_SIZES,
  POSTER_ORIENTATIONS,
  MAP_STYLES,
} from 'alvarcarto-common';
import { getProduct } from 'alvarcarto-price-util';
import CONST from '../constants'
import { getQuery, coordToPrettyText, mapItemToSku } from '.';

// We can assign a unique id for each new poster in the cart. This can be used as a stable React
// key (needed for e.g. MiniCart transition)
let idCounter = 0;

export function getItemId() {
  idCounter++;
  return idCounter;
}

export function getQueryCart() {
  const cartAsStringInQuery = getQuery('cart', 'string', null);
  if (cartAsStringInQuery === null) {
    return null
  }

  let cartInQuery;
  try {
    cartInQuery = JSON.parse(cartAsStringInQuery);
  } catch (e) {
    window.alert(`Error parsing cart from url: ${e}`);
  }

  return _.map(cartInQuery, item => {
    return _.merge({}, item, {
      // Reassign ids
      id: getItemId(),
    });
  })
}
const BARCELONA_CENTER = {
  lat: 41.382374,
  lng: 2.166612,
};
export { BARCELONA_CENTER as DEFAULT_MAP_CENTER };

function getMapDefaults() {
  const size = getQuery('size', 'string', '50x70cm', _.map(POSTER_SIZES, 'id'));
  return {
    id: getItemId(),
    quantity: 1,
    sku: mapItemToSku({ size, material: 'paper' }),
    customisation: {
      mapBounds: null,
      mapStyle: getQuery('mapStyle', 'string', 'bw', _.map(MAP_STYLES, 'id')),
      posterStyle: getQuery('posterStyle', 'string', 'sharp', _.map(POSTER_STYLES, 'id')),
      mapPitch: 0,
      mapBearing: 0,
      orientation: getQuery('orientation', 'string', 'portrait', _.map(POSTER_ORIENTATIONS, 'id')),
      labelsEnabled: getQuery('labels', 'boolean', true),
      labelHeader: getQuery('labelHeader', 'string', 'Barcelona'),
      labelSmallHeader: getQuery('labelSmallHeader', 'string', 'Catalonia'),
    },
    // Used to save user entered text only. This can be used to recover what
    // user wrote if they change autoUpdateCoordinates flag
    labelTextManual: getQuery('labelText', 'string', null),
    autoUpdateCoordinates: getQuery('updateCoords', 'boolean', true),
  };
}

export function getInitialCartItem() {
  const initialMapCenter = {
    lat: getQuery('lat', 'float', BARCELONA_CENTER.lat),
    lng: getQuery('lng', 'float', BARCELONA_CENTER.lng),
  };
  let mapZoom = getQuery('zoom', 'float', 10.5);
  if (mapZoom < CONST.MAP_MIN_ZOOM) {
    mapZoom = CONST.MAP_MIN_ZOOM;
  } else if (mapZoom > CONST.MAP_MAX_ZOOM) {
    mapZoom = CONST.MAP_MAX_ZOOM;
  }

  return _.merge({}, getMapDefaults(), {
    customisation: {
      mapCenter: initialMapCenter,
      mapZoom,
      labelText: coordToPrettyText(initialMapCenter),
    }
  });
}

export function getCartItemFromLocation(location) {
  return _.merge({}, getMapDefaults(), {
    customisation: {
      mapCenter: { lat: location.latitude, lng: location.longitude },
      mapZoom: 11,
      labelHeader: location.city,
      labelSmallHeader: location.country_name,
      labelText: coordToPrettyText({ lat: location.latitude, lng: location.longitude }),
    },
    labelTextManual: null,
  });
}

export function cartItemToMapItem(cartItem) {
  if (!cartItem) {
    return cartItem;
  }

  const { size, material } = getProduct(cartItem.sku).metadata;
  return _.merge({}, cartItem.customisation, {
    size,
    material,
  });
}

export function getCurrentMapItem(globalState) {
  const cartItem = globalState.cart[globalState.editCartItem];
  return cartItemToMapItem(cartItem);
}
