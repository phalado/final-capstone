import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  user: state.user,
  instructors: state.instructors,
});

export default connect(mapStateToProps, null)(App);
