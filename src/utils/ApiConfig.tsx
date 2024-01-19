const BASE_URL = 'http://localhost:3000/api';

export default class ApiConfig {
  static login = BASE_URL + '/auth/login';
  static register = BASE_URL + '/register';

}
