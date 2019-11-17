import { handleActions } from 'redux-actions';

import {
  clearConcepts,
  getConceptsSuccess,
  getConceptsFail,
} from '../actions/concepts';

const initialState = {
  loading: false,
  concepts: [],
};

const getConceptsSuccessReducer = (state, { payload }) => ({ ...state, loading: false, concepts: payload });
const getConceptsFailReducer = (state) => ({ ...state, loading: false, concepts: [] });
const clearConceptsReducer = () => ({ ...initialState });

const showError = (state, { payload }) => ({ ...state, error: payload });

export default handleActions({
  [getConceptsSuccess]: (state, payload) => getConceptsSuccessReducer(state, payload),
  [getConceptsFail]: (state, payload) => {
    getConceptsFailReducer(state, payload);
    showError(state, payload);
  },
  [clearConcepts]: (state) => clearConceptsReducer(state),
}, initialState);
