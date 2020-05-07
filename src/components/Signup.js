import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createUser } from '../services/user';
import './styles/Forms.css';

const Signup = props => {
  const { user } = props;
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    pass: '',
    conf: '',
  });
  const history = useHistory();

  const handleChange = event => {
    const { id, value } = event.target;
    const key = id.split('-')[1];
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await createUser(userInfo);
    if (response.status) {
      return (
        <div>
          {toast.success('Success: User created! Please, login.')}
          <ToastContainer />
          {history.push('/login')}
        </div>
      );
    }

    return (
      <div>
        {toast.error('Error: something wrong is not right.')}
        <ToastContainer />
      </div>
    );
  };

  if (user.logged) {
    return (
      <div>
        {toast.warn('User already logged')}
        <ToastContainer />
        {history.push('/')}
      </div>
    );
  }

  return (
    <div className="signup">
      <h1 id="signup-message">Fill the for to signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input id="input-name" type="text" onChange={handleChange} className="form-control" />
        </label>
        <label htmlFor="email">
          Email:
          <input id="input-email" type="email" onChange={handleChange} className="form-control" />
        </label>
        <label htmlFor="password">
          Password:
          <input id="input-pass" type="password" onChange={handleChange} className="form-control" />
        </label>
        <label htmlFor="password">
          Password confirmation:
          <input id="input-conf" type="password" onChange={handleChange} className="form-control" />
        </label>
        <input type="submit" value="submit" className="btn btn-primary form-control" />
      </form>
    </div>
  );
};

Signup.propTypes = {
  user: PropTypes.shape({
    logged: PropTypes.bool,
  }).isRequired,
};

export default Signup;
