import { combineReducers } from 'redux';
import thunkReducer from './reducer_thunk';
import firebaseReducer from './reducer_firebase';

const rootReducer = combineReducers({
  users: thunkReducer,
  posts: firebaseReducer
});

export default rootReducer;
