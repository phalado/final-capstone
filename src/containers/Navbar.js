import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { addInstructor } from '../actions';

const mapStateToProps = state => ({ instructors: state.instructors });

const mapDispatchToProps = dispatch => ({
  addInst: instructor => {
    dispatch(addInstructor(instructor));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
