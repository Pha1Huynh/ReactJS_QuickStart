import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import { getToken } from './utils/token';

import { store } from '~/redux';
import * as actions from '~/store/actions';

dayjs.locale('vi');
//getToken is a function declared in ultis to get accesstoken and rtefresh token
let authTokens = getToken();
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { Authorization: `Bearer ${authTokens ? authTokens.accessToken : ''}` },
});

instance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    authTokens = getToken();
    req.headers.Authorization = `Bearer ${authTokens ? authTokens.accessToken : ''}`;
  }

  let accessToken = jwt_decode(authTokens.accessToken);
  let exp = accessToken.exp;
  let now = dayjs();
  const isExpired = dayjs(exp * 1000).diff(now) < 1;
  if (!isExpired) return req;
  //dispatch here to refresh token
  //   store.dispatch(actions.handleRefreshToken({ refreshToken: authTokens.refreshToken }));

  authTokens = getToken();
  req.headers.Authorization = `Bearer ${authTokens ? authTokens.accessToken : ''}`;
  return req;
});

instance.interceptors.response.use((response) => {
  // Thrown error for request with OK status code
  const { data } = response;
  return response.data;
});
export default instance;
