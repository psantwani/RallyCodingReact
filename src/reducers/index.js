import { combineReducers } from 'redux';
import thunkReducer from './reducer_thunk';
import firebaseReducer, { selectedPosts as selectedPostsReducer } from './reducer_firebase';

const rootReducer = combineReducers({
  users: thunkReducer,
  posts: firebaseReducer,
  selectedPostIds: selectedPostsReducer
});

export default rootReducer;
