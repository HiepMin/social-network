import { SET_CURRENT_USER } from './../type';
import { SetAuthToken } from './../../utils';
import { ActPureSetPosts } from './../post/GetAllPosts';
import { ActPure_PostById } from './../post/GetPostById';
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
  dispatch(ActPureSetPosts([]));
  dispatch(ActPure_PostById({}))
}