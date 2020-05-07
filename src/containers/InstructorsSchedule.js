import { connect } from 'react-redux';
import { addClass, removeClass, changeWeek } from '../actions';
import InstructorsSchedule from '../components/InstructorsSchedule';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructors,
  classes: state.classes,
  signedUsers: state.signedUsers,
  week: state.week,
});

const mapDispatchToProps = dispatch => ({
  addClassy: classy => {
    dispatch(addClass(classy));
  },
  removeClassy: classID => {
    dispatch(removeClass(classID));
  },
  chngWeek: week => {
    dispatch(changeWeek(week));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructorsSchedule);
