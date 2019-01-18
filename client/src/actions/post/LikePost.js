import { 
  LIKE_POST, 
  DOING,
  DONE
} from './../type';
import { 
  Post_LikePost
} from './../../utils';
import { ActSetErrors } from './../error'

export default post_id => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'like post',
      post_id
    }
  });
  Post_LikePost(post_id)
    .then(res => {
      dispatch({
        type: LIKE_POST,
        payload: res.data,
        post_id,
      });
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    });
};
