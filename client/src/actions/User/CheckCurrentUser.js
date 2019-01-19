import { DOING, CHECK_CURRENT_USER } from './../type';
export default (currentId, guestId) => dispatch => {
  dispatch({ 
    type: DOING, 
    payload: {
      doWhat: 'checking current user'
    } 
  });
  dispatch(ActPureCheckCurrentUser(currentId === guestId));
}
export const ActPureCheckCurrentUser = flag => ({
  type: CHECK_CURRENT_USER,
  flag
})