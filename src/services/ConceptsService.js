import axios from 'axios';

import { SERVER_CONFIG, ENDPOINTS } from '../config/endpoints';

export class ConceptsService {
  static findByUser(user) {
    const FORMATTED_URI = ENDPOINTS.CONCEPTS.FIND_BY_USER;
    const params = { user };
    const url = `${SERVER_CONFIG.BASE_URL}${FORMATTED_URI}`;
    return axios.get(url, { params });
  }
}
