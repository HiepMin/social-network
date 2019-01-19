import { GET_POST_BY_ID, DOING, DONE } from './../type';
import { Get_PostById } from './../../utils';
import { ActSetErrors } from './../error'

export default (post_id, history, to) => dispatch => {
  dispatch({
    type: DOING,
    payload: {
      doWhat: 'getting post by post id',
      post_id
    }
  });
  Get_PostById(post_id)
    .then(res => {
      dispatch(ActPure_PostById(res.data));
      dispatch({ type: DONE })
    })
    .catch(() => {
      dispatch({ type: DONE });
      history.push(to);
    });
};
export const ActPure_PostById = data => ({
  type: GET_POST_BY_ID,
  payload: data,
})
