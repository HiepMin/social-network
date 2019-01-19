import { 
  REMOVE_POST,
  DONE,
  DOING
} from './../type';
import { 
  Delete_Post
} from './../../utils';
import { ActSetErrors } from './../error'

export default post_id => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: "remove post",
    }
  })
  Delete_Post(post_id)
    .then(() => {
      dispatch({
        type: REMOVE_POST,
        post_id,
      });
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    })
}

