/* global dataLayer */

export function triggerGtmEvent(eventObj) {
  dataLayer.push(eventObj);
}
