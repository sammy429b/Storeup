const BASE_URL = 'https://storeup-backend.vercel.app/api';

export default class ApiConfig {
  static login = BASE_URL + '/auth/login';
  static register = BASE_URL + '/register';

}
