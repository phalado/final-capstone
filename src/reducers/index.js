import { combineReducers } from 'redux';
import instructors from './instructors';
import user from './user';
import classes from './classes';
import signedUsers from './signedUsers';

const rootReducer = combineReducers({
  user,
  instructors,
  classes,
  signedUsers,
});

export default rootReducer;
