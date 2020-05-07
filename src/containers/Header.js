import { connect } from 'react-redux';
import Header from '../components/Header';
import { logout } from '../actions';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  logOut: user => {
    dispatch(logout(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
