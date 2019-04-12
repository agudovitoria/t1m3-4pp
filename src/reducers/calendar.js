import { handleActions } from 'redux-actions';

import {
  selectDay,
  clearCalendar,
} from '../actions/calendar/';

const initialState = {
  selectedDay: new Date()
};

const selectDayReducer = (state, { payload }) =>
  Object.assign({}, state, { selectedDay: payload });
const clearCalendarReducer = () =>
  Object.assign({}, initialState);

export default handleActions({
  [selectDay]: (state, payload) => selectDayReducer(state, payload),
  [clearCalendar]: state => clearCalendarReducer(state)
}, initialState);
