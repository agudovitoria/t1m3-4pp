import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './containers/Root';
import configureStore, { history } from './store/configureStore';
import { Grommet } from 'grommet';

const store = configureStore();

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

ReactDOM.render(
  <Grommet theme={ theme }>
    <Root store={ store } history={ history }/>
  </Grommet>,
  document.getElementById('root')
);

// If you want your DEPRECATED-app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
