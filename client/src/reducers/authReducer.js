import { SET_CURRENT_USER, GET_USER_BY_ID } from '../actions/type';
import isEmpty from './../helpers/validation/isEmpty';
const initialState = {
  isAuthenticated: false,
  user: null,
  currentUser: null
};
export default (state=initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload
      }
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

