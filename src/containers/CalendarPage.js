import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Calendar, Box, Grid } from 'grommet';
import TimingList from '../components/TimingList';
import TimingAdd from '../components/TimingAdd';
import * as calendarActions from '../actions/calendar/';
import * as timeActions from '../actions/time';
import * as productActions from '../actions/products/';
import * as conceptActions from '../actions/concepts/';
import PropTypes from 'prop-types';
import moment from 'moment';
import Loading from '../components/Loading';
import { loginSelectors, calendarSelectors } from '../selectors/';

class CalendarPage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      firstSurname: PropTypes.string,
      secondSurname: PropTypes.string,
      email: PropTypes.string
    }),
    loading: PropTypes.bool,
    selectedDay: PropTypes.object,
    times: PropTypes.array,
    products: PropTypes.array,
    concepts: PropTypes.array,
    actions: PropTypes.shape({
      calendarActions: PropTypes.shape({
        clearCalendar: PropTypes.func,
        selectDay: PropTypes.func
      }),
      timeActions: PropTypes.shape({
        clearTime: PropTypes.func,
        getTimes: PropTypes.func
      }),
      productActions: PropTypes.shape({
        clearProduct: PropTypes.func,
        getProducts: PropTypes.func
      }),
      conceptActions: PropTypes.shape({
        clearConcept: PropTypes.func,
        getConcepts: PropTypes.func
      })
    }),
    dispatch: PropTypes.func
  };

  componentWillMount() {
    const {
      user: { id },
      selectedDay,
      actions: {
        productActions: { getProducts },
        timeActions: { getTimes },
        conceptActions: { getConcepts },
        calendarActions: { selectDay }
      }
    } = this.props;

    getProducts(id);
    getConcepts(id);
    selectDay(selectedDay);
    getTimes(id, selectedDay);
  }

  render() {
    const {
      user,
      loading,
      selectedDay,
      times,
      products,
      concepts,
      actions: {
        calendarActions: {
          selectDay
        },
        timeActions: {
          getTimes,
          addTime
        }
      }
    } = this.props;

    const { id } = user;

    const onSelectDay = (day) => {
      selectDay(day);
      getTimes(id, day);
    };

    const onAddTime = (time) => {
      addTime(id, selectedDay, time);
    };

    return (
      <Grid
        rows={ ['xxsmall', 'flex'] }
        columns={ ['flex', 'flex', 'flex'] }
        gap={ "small" }
        fill={ "horizontal" }
        areas={ [
          { name: 'menubar', start: [0, 0], end: [2, 0] },
          { name: 'calendar', start: [0, 1], end: [0, 1] },
          { name: 'times-list', start: [1, 1], end: [1, 1] },
          { name: 'detail', start: [2, 1], end: [2, 1] }
        ] }
      >
        { loading && <Loading/> }
        <Box gridArea={ "calendar" } elevation={ "large" } margin={ "medium" } pad={ "small" }>
          <Calendar
            size="medium"
            locale="es-ES"
            firstDayOfWeek={ 1 }
            date={ selectedDay.toString() }
            onSelect={ (date) => onSelectDay(moment(date)) }
          />

        </Box>
        <Box gridArea={ "times-list" } elevation={ "large" } margin={ "medium" } pad={ "small" } gap={ "small" }>
          <TimingList
            selectedDay={ selectedDay }
            products={ products }
            concepts={ concepts }
            times={ times }
          />
          <TimingAdd
            products={ products }
            concepts={ concepts }
            onAddTime={ onAddTime }
          />
        </Box>
        <Box gridArea="detail">DETAIL</Box>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    calendarActions: bindActionCreators(calendarActions, dispatch),
    timeActions: bindActionCreators(timeActions, dispatch),
    productActions: bindActionCreators(productActions, dispatch),
    conceptActions: bindActionCreators(conceptActions, dispatch)
  }
});

const mapStateToProps = (state) => {
  const user = loginSelectors.getUser(state);
  const selectedDay = calendarSelectors.getSelectedDay(state);

  console.debug('Loaded user', user);
  console.debug('Loaded selected day', selectedDay);

  const {
    product: { products },
    concept: { concepts },
    time: { loading, times }
  } = state;

  return { user, loading, selectedDay, times, products, concepts };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
