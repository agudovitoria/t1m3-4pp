import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const STATES = {
  REQUESTED: 'requested',
  PENDING: 'pending',
  REJECTED: 'pending',
  APPROVED: 'approved'
};

export class Tag extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  get backgroundColor() {
    const { value } = this.props;
    switch (value) {
      case STATES.REQUESTED:
        return 'neutral-3';
      case STATES.PENDING:
        return 'accent-2';
      case STATES.APPROVED:
        return 'status-ok';
      case STATES.REJECTED:
        return 'status-error';
      default:
        return 'status-unknown';
    }
  }

  render() {
    const { value } = this.props;
    return (
      <Box
        round={ "medium" }
        align={ "center" }
        pad={ { vertical: "xsmall", horizontal: "small" } }
        background={ this.backgroundColor }
      >{ value }</Box>
    );
  }
}
