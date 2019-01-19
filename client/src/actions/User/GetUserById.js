import { DOING, DONE, GET_USER_BY_ID } from './../type';
import { Get_UserById } from './../../utils';
import { ActSetErrors } from './../error';
export default user_id => dispatch => {
  dispatch({  
    type: DOING,
    payload: {
      doWhat: "getting user by id",
    }
  })
  Get_UserById(user_id)
    .then(res => {
      dispatch(ActPure_SetUserById(res.data));
      dispatch({ type: DONE })
    })
    .catch(err => {
      dispatch(ActSetErrors(err.response.data));
      dispatch({ type: DONE })
    })
}

export const ActPure_SetUserById = data => ({
  type: GET_USER_BY_ID,
  payload: data
})



