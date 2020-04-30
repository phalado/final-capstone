import { connect } from 'react-redux';
import { removeClass, changeWeek } from '../actions';
import UserSchedule from '../components/UserSchedule';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructors,
  classes: state.classes,
  week: state.week,
});

const mapDispatchToProps = dispatch => ({
  removeClassy: classID => {
    dispatch(removeClass(classID));
  },
  chngWeek: week => {
    dispatch(changeWeek(week));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSchedule);
