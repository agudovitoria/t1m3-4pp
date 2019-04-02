import React, { Component } from 'react';
import { Layer } from 'grommet/es6';

export default class Loading extends Component {
  render() {
    return (
      <Layer animate={ true }></Layer>
    );
  }
}
