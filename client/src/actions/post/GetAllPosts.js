import { GET_POSTS, DOING, DONE } from './../type';
import { Get_AllPosts } from './../../utils';
import { ActSetErrors } from './../error'

export default () => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'getting posts',
      id: null
    }
  });
  Get_AllPosts()
    .then(res => {
      dispatch(ActPureSetPosts(res.data));
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    });
};
export const ActPureSetPosts = posts => ({
  type: GET_POSTS,
  payload: posts,
})

