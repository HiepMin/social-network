import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/authReducer';
import processReducer from './reducers/processReducer';
import errorReducer from './reducers/errorReducer';
import postReducer from './reducers/postReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  process: processReducer,
  error: errorReducer,
  post: postReducer
});

