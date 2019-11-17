import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { persistState } from 'redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from '../reducers';
// import DevTools from '../config/devTools';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

export const history = createBrowserHistory();

const router = routerMiddleware(history);

export default (initialState) => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
      compose(
        applyMiddleware(thunk, router, logger),
        // DevTools.instrument(),
        persistState(
          window.location.href.match(
            /[?&]debug_session=([^&]+)\b/,
          ),
        ),
      ),
    ),
  );

  // if (module.hot) {
  //   module.hot.accept('../__tests__', () => {
  //     store.replaceReducer(createRootReducer(history));
  //     const nextRootReducer = require('../__tests__').default;
  //     store.replaceReducer(nextRootReducer(history));
  //   });
  // }

  return store;
};
