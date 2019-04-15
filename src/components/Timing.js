import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';
import { Clock, Folder, Stakeholder } from 'grommet-icons';
import { Tag } from './Tag';

export default class Timing extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    concept: PropTypes.object.isRequired,
    timing: PropTypes.number.isRequired,
    validated: PropTypes.bool.isRequired
  };

  render() {
    const { product, concept, timing } = this.props;

    return (
      <Box pad={ "small" } alignContent={ "between" } elevation={ "small" } background={ "light-1" } gap={ "small" }>
        <Grid
          rows={ ['flex'] }
          columns={ ['flex', 'flex', 'flex', 'flex'] }
          gap={ "medium" }
          fill={ "horizontal" }
          areas={
            [
              { name: 'product', start: [0, 0], end: [0, 0] },
              { name: 'concept', start: [1, 0], end: [1, 0] },
              { name: 'time', start: [2, 0], end: [2, 0] },
              { name: 'state', start: [3, 0], end: [3, 0] }
            ]
          }
        >
          <Box gridArea={ "product" } direction={ "row" } gap={ "small" } align={ "center" }>
            <Stakeholder/>
            { product.name }
          </Box>
          <Box gridArea={ "concept" } direction={ "row" } gap={ "small" } align={ "center" }>
            <Folder/>
            { concept.name }
          </Box>
          <Box gridArea={ "time" } direction={ "row" } gap={ "small" } align={ "center" }>
            <Clock/>
            { timing }
          </Box>
          <Box gridArea={ "state" } direction={ "row" } gap={ "small" } align={ "right" }>
            <Tag value={ "pending" }/>
          </Box>
        </Grid>
      </Box>
    );
  }
}
