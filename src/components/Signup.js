import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../asyncCalls/createUser';
import './styles/Forms.css';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [conf, setConf] = useState();
  const history = useHistory();

  const handleChange = event => {
    switch (event.target.id) {
      case 'input-name':
        setName(event.target.value);
        break;
      case 'input-email':
        setEmail(event.target.value);
        break;
      case 'input-pass':
        setPass(event.target.value);
        break;
      case 'input-conf':
        setConf(event.target.value);
        break;
      default:
        return null;
    }
    return null;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await createUser({
      name, email, pass, conf,
    });
    if (response.status) {
      document.getElementById('signup-message').innerHTML = 'Success: User created! Go to login.';
      history.push('/login');
    } else {
      document.getElementById('signup-message').innerHTML = 'Error: something wrong is not right.';
    }
  };

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

export default Signup;
