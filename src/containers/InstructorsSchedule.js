import { connect } from 'react-redux';
import { addClass, removeClass } from '../actions';
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
  removeClassy: classID => {
    dispatch(removeClass(classID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructorsSchedule);
