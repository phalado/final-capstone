import { connect } from 'react-redux';
import { addClass } from '../actions';
import InstructorsSchedule from '../components/InstructorsSchedule';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructors,
  classes: state.classes,
  signedUsers: state.signedUsers,
});

const mapDispatchToProps = dispatch => ({
  addClassy: classy => {
    dispatch(addClass(classy));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructorsSchedule);
