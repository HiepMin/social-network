import { 
  COMMENT_POST,
  DONE,
  DOING
} from './../type';
import { 
  Post_Comment,
} from './../../utils';
import { ActSetErrors } from './../error'

export default (post_id, comment) => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'pushing comment',
      post_id
    }
  });
  Post_Comment(post_id, comment)
    .then(res => {
      dispatch({
        type: COMMENT_POST,
        payload: res.data,
        post_id
      });
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    })
};
