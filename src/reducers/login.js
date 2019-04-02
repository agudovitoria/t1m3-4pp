import { handleActions } from 'redux-actions';

const initialState = {
  user: null,
  token: null
};

const clearLoginReducer = () =>
  Object.assign({}, initialState);

export default handleActions({
  [clearLoginReducer]: state => clearLoginReducer(state)
}, initialState);
