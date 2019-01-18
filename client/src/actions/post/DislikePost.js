import { 
  DISLIKE_POST,
  DOING, 
  DONE
} from './../type';
import { 
  Post_DislikePost
} from './../../utils';
import { ActSetErrors } from './../error'

export default post_id => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'dislike post',
      post_id
    }
  });
  Post_DislikePost(post_id)
    .then(res => {
      dispatch({
        type: DISLIKE_POST,
        payload: res.data,
        post_id,
      });
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    });
}
