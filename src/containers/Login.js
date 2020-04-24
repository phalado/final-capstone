import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../actions';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  logIn: user => {
    dispatch(login(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
