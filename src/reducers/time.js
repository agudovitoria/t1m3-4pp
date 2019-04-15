import { handleActions } from 'redux-actions';

import {
  clearTime,
  getTimesSuccess,
  addTimesSuccess,
  getTimesFail,
  addTimesFail,
  setTimeAsBusy,
  setTimeAsIdle
} from '../actions/time/';

const initialState = {
  loading: false,
  times: [],
  error: null
};

const setTimeAsBusyReducer = state =>
  Object.assign({}, state, { loading: true });
const setTimeAsIdleReducer = state =>
  Object.assign({}, state, { loading: false });
const getTimesSuccessReducer = (state, { payload }) =>
  Object.assign({}, state, { loading: false, times: payload || [] });
const getTimesFailReducer = (state) =>
  Object.assign({}, state, { loading: false, times: [] });
const addTimesSuccessReducer = (state, { payload }) =>
  Object.assign({}, state, { loading: false, times: [...state.times, payload] });
const addTimesFailReducer = (state, payload) =>
  Object.assign({}, state, { loading: false });
const showError = (state, { message }) =>
  Object.assign({}, state, { error: message });
const clearTimeReducer = () =>
  Object.assign({}, initialState);

export default handleActions({
  [setTimeAsBusy]: state => setTimeAsBusyReducer(state),
  [setTimeAsIdle]: state => setTimeAsIdleReducer(state),
  [getTimesSuccess]: (state, payload) => getTimesSuccessReducer(state, payload),
  [getTimesFail]: (state, payload) => {
    getTimesFailReducer(state);
    showError(state, { message: 'Error dispatched!' });
  },
  [addTimesSuccess]: (state, payload) => addTimesSuccessReducer(state, payload),
  [addTimesFail]: (state, payload) => {
    addTimesFailReducer(state, payload);
    showError(state, { message: 'Error dispatched!' });
  },
  [clearTime]: state => clearTimeReducer()
}, initialState);
