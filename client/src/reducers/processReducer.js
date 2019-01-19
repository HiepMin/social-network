import { DOING, DONE } from './../actions/type';
const initialState = {
  loading: null,
  doWhat: null,
  post_id: null,
  user_id: null
};

export default (state=initialState, action) => {
  switch (action.type) {
    case DOING:
      return {
        ...state,
        loading: true,
        ...action.payload
      }
    case DONE:
      return {
        ...state,
        loading: false,
        doWhat: null,
        post_id: null,
        user_id: null
      }
    default:
      return {...state}
  }
}
