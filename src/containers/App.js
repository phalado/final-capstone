import { connect } from 'react-redux';
import { changeWeek } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructors,
  week: state.week,
});

const mapDispatchToProps = dispatch => ({
  chngWeek: week => {
    dispatch(changeWeek(week));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
