import { combineReducers } from 'redux';
import instructors from './instructors';
import user from './user';
import classes from './classes';

const rootReducer = combineReducers({
  user,
  instructors,
  classes,
});

export default rootReducer;
