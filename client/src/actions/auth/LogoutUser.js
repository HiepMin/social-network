import { SET_CURRENT_USER } from './../type';
import { SetAuthToken } from './../../utils';
export default () => dispatch => {
  // throw token out localStorage
  localStorage.removeItem('jwtToken');
  // set auth header authorization to false
  SetAuthToken(false);
  // set current user is a empty object
  dispatch({
    type: SET_CURRENT_USER,
    payload: null
  });
}