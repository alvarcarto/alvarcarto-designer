import _ from 'lodash';
import { isFSA } from 'flux-standard-action';

export default (track, select = ({ meta }) => meta.analytics) => store => next => action => {
  const returnValue = next(action);

  if (!action || !action.meta) {
    return returnValue;
  }

  const event = select(action);

  if (!event) {
    return returnValue;
  }

  const storeState = store.getState();
  if (_.isArray(event)) {
    _.forEach(event, e => {
      if (isFSA(e)) {
        track(e, storeState);
      }
    });
  } else {
    if (isFSA(event)) {
      track(event, storeState);
    }
  }

  return returnValue;
};