import {
  getProductsSuccess,
  getProductsFail,
  setProductsAsBusy,
  setProductsAsIdle,
} from '.';

import { ProductsService } from '../../services';

export const getProducts = (userId) => (dispatch) => {
  dispatch(setProductsAsBusy());

  return ProductsService.findByUser(userId)
    .then(({ data }) => data)
    .then((products) => dispatch(getProductsSuccess(products)))
    .catch((error) => dispatch(getProductsFail(error)))
    .finally(() => dispatch(setProductsAsIdle));
};
