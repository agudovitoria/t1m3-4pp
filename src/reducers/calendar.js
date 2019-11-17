import { handleActions } from 'redux-actions';

import {
  selectDay,
  clearCalendar,
} from '../actions/calendar';

const initialState = {
  selectedDay: new Date(),
};

const selectDayReducer = (state, { payload }) => ({ ...state, selectedDay: payload });
const clearCalendarReducer = () => ({ ...initialState });

export default handleActions({
  [selectDay]: (state, payload) => selectDayReducer(state, payload),
  [clearCalendar]: (state) => clearCalendarReducer(state),
}, initialState);
