import { handleActions } from 'redux-actions';

import {
  clearConcepts,
  getConceptsSuccess,
  getConceptsFail
} from '../actions/concepts';

const initialState = {
  loading: false,
  concepts: []
};

const getConceptsSuccessReducer = (state, { payload }) =>
  Object.assign({}, state, { loading: false, concepts: payload });
const getConceptsFailReducer = (state) =>
  Object.assign({}, state, { loading: false, concepts: [] });
const clearConceptsReducer = () =>
  Object.assign({}, initialState);

const showError = (state, { payload }) =>
  Object.assign({}, state, { error: payload });

export default handleActions({
  [getConceptsSuccess]: (state, payload) => getConceptsSuccessReducer(state, payload),
  [getConceptsFail]: (state, payload) => {
    getConceptsFailReducer(state, payload);
    showError(state, payload);
  },
  [clearConcepts]: state => clearConceptsReducer(state)
}, initialState);
