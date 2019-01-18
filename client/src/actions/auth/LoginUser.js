import { SET_CURRENT_USER, DOING, DONE } from './../type';
import { 
  Post_LoginUser, 
  SetAuthToken,
} from './../../utils';
import { ActSetErrors } from './../error';
import jwt_decode from 'jwt-decode';
export default user => dispatch  => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'login user'
    }
  });
  Post_LoginUser(user)
    .then(res => {
      // save token into localstorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // set token to the header authorization for every request
      SetAuthToken(token);
      // decode token to get user info in it
      const decoded = jwt_decode(token);
      // set current user with decoded data
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
      // reset errors
      dispatch(ActSetErrors({}))
      dispatch({ type: DONE });
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE });
    })
}