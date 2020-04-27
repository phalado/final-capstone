import React, { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { userLogin } from '../asyncCalls/createUser';
import './styles/Forms.css';

const Login = props => {
  const { user, logIn } = props;
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleChange = event => {
    if (event.target.id === 'input-email') {
      setEmail(event.target.value);
    } else if (event.target.id === 'input-pass') {
      setPass(event.target.value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await userLogin({ email, pass });
    if (response === false) {
      document.getElementById('login-message').innerHTML = 'Error: Not a user';
    } else if (response === true) {
      document.getElementById('login-message').innerHTML = 'Error: Password incorrect';
    } else {
      logIn({ id: response.id, name: response.name, email: response.email });
      const token = JSON.stringify({
        id: response.id, name: response.name, email: response.email, remember: true,
      });
      localStorage.setItem('localUser', token);
      return <Redirect to="/home" />;
    }
    return null;
  };

  return (
    <div className="login">
      {user.logged ? <Redirect to="/" /> : null}
      <h1 id="login-message">Fill the form to login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">
          Email:
          <input id="input-email" type="email" onChange={handleChange} className="form-control" />
        </label>
        <label htmlFor="password">
          Password:
          <input id="input-pass" type="password" onChange={handleChange} className="form-control" />
        </label>
        <input type="submit" value="Submit" className="btn btn-primary form-control" />
      </form>
    </div>
  );
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  user: PropTypes.shape({
    logged: PropTypes.bool,
  }).isRequired,
};

export default Login;
