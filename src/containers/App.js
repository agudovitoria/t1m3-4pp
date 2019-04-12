import React, { Component } from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import ContainerManager from './ContainerManagerPage';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <Box fill>
        <ContainerManager children={ children }/>
      </Box>
    );
  }
}
