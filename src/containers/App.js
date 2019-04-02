import React, { Component } from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <Box margin={ { top: 'smallish' } } elevation="depth5">
        { children }
      </Box>
    );
  }
}
