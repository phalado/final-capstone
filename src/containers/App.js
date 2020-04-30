import { connect } from 'react-redux';
import { changeWeek, updateUser } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructors,
  week: state.week,
});

const mapDispatchToProps = dispatch => ({
  chngWeek: week => {
    dispatch(changeWeek(week));
  },
  editUser: user => {
    dispatch(updateUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
