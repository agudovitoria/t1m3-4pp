import { handleActions } from 'redux-actions';

import {
  clearProducts,
  getProductsSuccess,
  getProductsFail
} from '../actions/products/';

const initialState = {
  loading: false,
  products: [],
  error: false,
  message: null
};

const getProductsSuccessReducer = (state, { payload }) =>
  Object.assign({}, state, { loading: false, products: payload });
const getProductsFailReducer = (state) =>
  Object.assign({}, state, { loading: false, products: [] });
const clearProductsReducer = () =>
  Object.assign({}, initialState);
const showError = (state, { message }) =>
  Object.assign({}, state, { error: true, message });

export default handleActions({
  [getProductsSuccess]: (state, payload) => getProductsSuccessReducer(state, payload),
  [getProductsFail]: (state, payload) => {
    getProductsFailReducer(state, payload);
    showError(state, { message: 'Error dispatched!' });
  },
  [clearProducts]: state => clearProductsReducer(state)
}, initialState);
