import { 
  UNLIKE_POST,
  DONE,
  DOING
} from './../type';
import { 
  Post_UnlikePost
} from './../../utils';
import { ActSetErrors } from './../error'

export default (post_id, user_id) => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'unlike post',
      post_id
    }
  });
  Post_UnlikePost(post_id)
    .then(res => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data,
        post_id,
        user_id,
      });
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    })
}