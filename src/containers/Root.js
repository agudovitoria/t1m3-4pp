import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';
import routes from '../config/routes.js';
import { ConnectedRouter } from "connected-react-router";

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { store, history } = this.props;

    const isDevEnv = process.env.NODE_ENV === 'development';

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <App>{ routes }</App>
          {
            isDevEnv &&
            <DevTools/>
          }
        </ConnectedRouter>
      </Provider>
    );
  }
}
