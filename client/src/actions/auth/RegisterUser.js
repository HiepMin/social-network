import { DOING, DONE } from './../type';
import { Post_RegisterUser } from './../../utils';
import { ActSetErrors } from './../error';
export default (user, history, pushRoute) => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'register user'
    }
  });
  Post_RegisterUser(user)
    .then(() => {
      history.push(pushRoute);
      dispatch({ type: DONE });
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE });
    })
}

