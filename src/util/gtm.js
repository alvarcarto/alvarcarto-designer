/* global dataLayer */

export function triggerGtmEvent(eventObj) {
  window.dataLayer.push(eventObj);
}
