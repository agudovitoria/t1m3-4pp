import axios from 'axios';
import moment from 'moment';

import { SERVER_CONFIG, ENDPOINTS } from '../config/endpoints';

const getFormattedDate = (day) => moment(day).format('YYYY-MM-DD');

export class TimeService {
  static findEventsForUserAndDate(user, day) {
    const FORMATTED_URI = ENDPOINTS.CALENDAR.FIND_BY_USER_AND_DATE;
    const date = getFormattedDate(day);
    const params = { user, date };
    const url = `${SERVER_CONFIG.BASE_URL}${FORMATTED_URI}`;

    return axios.get(url, { params });
  }

  static add(user, day, { product, concept, timing }) {
    const FORMATTED_URI = ENDPOINTS.TIMES.ADD;
    const date = getFormattedDate(day);
    const url = `${SERVER_CONFIG.BASE_URL}${FORMATTED_URI}`;

    return axios.post(url, {
      user, date, product, concept, timing,
    });
  }
}
