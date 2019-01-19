import { Get_PostByUserId } from './../../utils';
import { ActSetErrors } from './../error'
import { DOING, DONE } from './../type';
import { ActPureSetPosts } from './GetAllPosts';
export default  user_id => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'getting posts by user id'
    }
  })
  Get_PostByUserId(user_id)
    .then(res => {
      dispatch(ActPureSetPosts(res.data))
      dispatch({ type: DONE })
    })
    .catch(err =>{ 
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE });
    });
}
