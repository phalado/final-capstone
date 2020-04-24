import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getInstructors } from '../asyncCalls/createInstructor';
import { userLogin, createUser } from '../asyncCalls/createUser';
import Home from './Home';
import Login from '../containers/Login';
import Signup from './Signup';
import './App.css';

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

  const handleLogin = async user => {
    const response = await userLogin(user);
    console.log(response);
  };

  const handleSignup = async user => {
    const response = await createUser(user);
    console.log(response);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home
              instructors={instructors}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
