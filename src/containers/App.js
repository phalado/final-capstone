import { connect } from 'react-redux';
import App from '../components/App';
import { login, logout } from '../actions';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructors,
  classes: state.classes,
});

const mapDispatchToProps = dispatch => ({
  logIn: user => {
    dispatch(login(user));
  },
  logOut: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
