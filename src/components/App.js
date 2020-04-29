import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import Navbar from '../containers/Navbar';
import Home from './Home';
import InstructorsList from './InstructorsList';
import InstructorFile from './InstructorFile';
import InstructorsSchedule from '../containers/InstructorsSchedule';
import Login from '../containers/Login';
import Signup from './Signup';
import './styles/App.css';

const App = props => {
  const { instructors } = props;

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body">
          <Navbar />
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Home instructors={instructors} />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/instructors">
                <InstructorsList instructors={instructors} />
              </Route>
              <Route path="/instFile/:id">
                <InstructorFile instructors={instructors} />
              </Route>
              <Route path="/instSchedule/:id">
                <InstructorsSchedule />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
