import axios from 'axios';

import { SERVER_CONFIG, ENDPOINTS } from '../config/endpoints';

export class ProductsService {
  static findByUser(user) {
    const FORMATTED_URI = ENDPOINTS.PRODUCTS.FIND_BY_USER;
    const params = { user };
    const url = `${SERVER_CONFIG.BASE_URL}${FORMATTED_URI}`;
    return axios.get(url, { params });
  }
}
