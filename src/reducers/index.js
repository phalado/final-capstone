import { combineReducers } from 'redux';
import instructors from './instructors';
import user from './user';
import classes from './classes';
import signedUsers from './signedUsers';
import week from './week';

const rootReducer = combineReducers({
  user,
  instructors,
  classes,
  signedUsers,
  week,
});

export default rootReducer;
