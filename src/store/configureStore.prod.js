import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const router = routerMiddleware(history);

export default (initialState) =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, router)
  );
