import { 
  UNDISLIKE_POST,
  DOING,
  DONE
} from './../type';
import { 
  Post_UndislikePost,
} from './../../utils';
import { ActSetErrors } from './../error'
export default (post_id, user_id) => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'undislike post',
      post_id
    }
  });
  Post_UndislikePost(post_id) 
    .then(res => {
      dispatch({
        type: UNDISLIKE_POST,
        payload: res.data,
        post_id,
        user_id,
      });
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    });
};
