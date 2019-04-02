import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './login';
import calendar from './calendar';
import time from './time';
import product from './product';
import concept from './concept';


export default (history) => {
  const router = connectRouter(history);

  return combineReducers({
    router,
    login,
    calendar,
    time,
    product,
    concept
  });
};
