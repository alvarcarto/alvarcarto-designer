/* global dataLayer */

export function triggerAnalyticsEvent(eventObj) {
  window.dataLayer.push(eventObj);
}
