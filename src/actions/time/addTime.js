
import { TimeService } from '../../services/TimeService';
import { addTimesSuccess } from './addTimesSuccess';
import { addTimesFail } from './addTimesFail';

export const addTime = (userId, date, timing) => (dispatch) => TimeService.add(userId, date, timing)
  .then(({ data }) => data)
  .then((response) => dispatch(addTimesSuccess(response)))
  .catch((error) => dispatch(addTimesFail(error)));
