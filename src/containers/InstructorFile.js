import { connect } from 'react-redux';
import { changeWeek } from '../actions';
import InstructorFile from '../components/InstructorFile';

const mapStateToProps = state => ({
  instructors: state.instructors,
});

const mapDispatchToProps = dispatch => ({
  chngWeek: week => {
    dispatch(changeWeek(week));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructorFile);
