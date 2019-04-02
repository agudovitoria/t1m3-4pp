import moment from 'moment';
import 'moment/locale/es';

export default class DateUtils {
  static formatDate(date) {
    if (date === null) {
      return null;
    }

    return moment(date).format('LL');
  }
}
