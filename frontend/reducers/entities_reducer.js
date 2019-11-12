import { combineReducers } from 'redux';

import posts from './posts_reducer'
import users from './users_reducer';

export default combineReducers({
  posts,
  users
});