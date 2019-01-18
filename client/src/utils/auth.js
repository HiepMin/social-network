import axios from 'axios';
const urlApi = '/api/user';
const ReqAPI = (method, url, data) => axios({ method, url, data });

export const Post_LoginUser = user => 
  ReqAPI('POST', `${urlApi}/login`, user);
export const Post_RegisterUser = user =>
  ReqAPI('POST', `${urlApi}/register`, user);
export const Get_CurrentUser = () =>
  ReqAPI('GET', `${urlApi}/current`, null);
export const Get_UserById = user_id => 
  ReqAPI('GET', `${urlApi}/id=${user_id}`)
export const SetAuthToken = token => {
  if (token) {
    // apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}