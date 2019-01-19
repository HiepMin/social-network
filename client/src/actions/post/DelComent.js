import { 
  REMOVE_COMMENT_POST,
  DOING,
  DONE
} from './../type';
import { 
  Delete_Comment,
} from './../../utils';
import { ActSetErrors } from './../error'

export default (post_id, cmt_id) => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: "remove comment",
      post_id
    }
  })
  Delete_Comment(post_id, cmt_id)
    .then(res => {
      dispatch({
        type: REMOVE_COMMENT_POST,
        payload: res.data,
        post_id,
        cmt_id
      });
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    })
};
