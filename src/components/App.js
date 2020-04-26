import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getInstructors } from '../asyncCalls/createInstructor';
import Home from './Home';
import InstructorsList from './InstructorsList';
import InstructorFile from './InstructorFile';
import Login from '../containers/Login';
import Signup from './Signup';
import './App.css';
import Header from '../containers/Header';

const App = props => {
  const {
    user, instructors, classes, logIn, logOut, addInst,
  } = props;

  const handleAddInstructor = array => {
    if (array !== []) {
      array.forEach(value => {
        addInst(value);
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchInstructors = async () => {
      const response = await getInstructors();

      if (mounted) {
        const newArray = [];
        response.forEach(value => {
          newArray.push(value);
        });

        handleAddInstructor(newArray);
      }
    };

    fetchInstructors();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home instructors={instructors} />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route path="/instructors">
            <Header />
            <InstructorsList instructors={instructors} />
          </Route>
          <Route path="/instFile/:id">
            <Header />
            <InstructorFile
              instructors={instructors}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
