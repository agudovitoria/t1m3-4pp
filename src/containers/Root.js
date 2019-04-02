import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';
import routes from '../config/routes.js';
import { Box } from 'grommet/es6';
import { ConnectedRouter } from "connected-react-router";

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={ { left: 'medium', right: 'small', vertical: 'small' } }
    elevation='medium'
    style={ { zIndex: '1' } }
    { ...props }
  />
);

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
          <AppBar>t1m3-4pp</AppBar>
          <App>{ routes }</App>
          {
            isDevEnv &&
            <div>
              <DevTools/>
            </div>
          }
        </ConnectedRouter>
      </Provider>
    );
  }
}
