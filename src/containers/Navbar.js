import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { addInstructor, addClass, addUsers } from '../actions';

const mapStateToProps = state => ({
  instructors: state.instructors,
  signedUsers: state.signedUsers,
});

const mapDispatchToProps = dispatch => ({
  addInst: instructor => {
    dispatch(addInstructor(instructor));
  },
  addClassy: classy => {
    dispatch(addClass(classy));
  },
  addUsr: user => {
    dispatch(addUsers(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
