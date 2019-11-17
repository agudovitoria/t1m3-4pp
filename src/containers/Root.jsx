import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App.jsx';
import DevTools from '../config/devTools';
import routes from '../config/routes.js';

const isDevEnv = process.env.NODE_ENV === 'development';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>{routes}</App>
      { isDevEnv && <DevTools /> }
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
