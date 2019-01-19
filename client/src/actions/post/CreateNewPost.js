import { Post_NewPost } from './../../utils';
import { ActSetErrors } from './../error';
import { DOING, DONE, CREATE_NEW_POST } from './../type';
export default post => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'creating new post in profile detail' 
    }
  })
  Post_NewPost(post)
    .then(res => {
      dispatch({
        type: CREATE_NEW_POST,
        payload: res.data
      })
      dispatch({ type: DONE })
    }).catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    });
}
