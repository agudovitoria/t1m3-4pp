import { getTimesFail } from './getTimesFail';
import { getTimesSuccess } from './getTimesSuccess';
import { TimeService } from '../../services';
import { setTimeAsIdle } from './setTimeAsIdle';
import { setTimeAsBusy } from './setTimeAsBusy';

export const getTimes = (userId, selectedDay) => (dispatch) => {
  dispatch(setTimeAsBusy());
  return TimeService.findEventsForUserAndDate(userId, selectedDay)
    .then(({ data }) => data)
    .then((response) => dispatch(getTimesSuccess(response)))
    .catch((error) => dispatch(getTimesFail(error)))
    .finally(() => dispatch(setTimeAsIdle()));
};
