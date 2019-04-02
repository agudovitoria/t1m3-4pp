import { handleActions } from 'redux-actions';

import {
  clearConcepts,
  getConceptsSuccess,
  getConceptsFail
} from '../actions/concepts';

const initialState = {
  loading: false,
  concepts: [],
  error: false,
  message: null
};

const getConceptsSuccessReducer = (state, { payload }) =>
  Object.assign({}, state, { loading: false, concepts: payload });
const getConceptsFailReducer = (state) =>
  Object.assign({}, state, { loading: false, concepts: [] });
const clearConceptsReducer = () =>
  Object.assign({}, initialState);

const showError = (state, { message }) =>
  Object.assign({}, state, { error: true, message });

export default handleActions({
  [getConceptsSuccess]: (state, payload) => getConceptsSuccessReducer(state, payload),
  [getConceptsFail]: (state, payload) => {
    getConceptsFailReducer(state, payload);
    showError(state, { message: 'Error dispatched!' });
  },
  [clearConcepts]: state => clearConceptsReducer(state)
}, initialState);
