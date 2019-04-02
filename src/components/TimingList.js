import React, { Component } from 'react';
import { Calendar } from 'grommet-icons';
import PropTypes from 'prop-types';
import Timing from './Timing';
import DateUtils from '../utils/dateUtils';
import { Box } from 'grommet/';

export default class TimingList extends Component {
  static propTypes = {
    selectedDay: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    concepts: PropTypes.array.isRequired,
    times: PropTypes.array.isRequired
  };

  render() {
    const { selectedDay, times, products, concepts } = this.props;
    const formattedSelectedDay = DateUtils.formatDate(selectedDay);

    return (
      <Box>
        <Box pad={ "small" }>
          <h3><Calendar/>{ formattedSelectedDay }</h3>
        </Box>
        <Box gap={ "small" }>
          {
            times
              .map(({ id, product, concept, timing, validated }) => {
                const productName = products.find(it => it.id === product);
                const conceptName = concepts.find(it => it.id === concept);

                return (
                  <Timing
                    key={ id }
                    product={ productName }
                    concept={ conceptName }
                    timing={ timing }
                    validated={ validated }
                  />
                );
              })
          }
        </Box>
      </Box>
    );
  }
}
