import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../asyncCalls/createUser';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [conf, setConf] = useState();

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
      return <Redirect to="/login" />;
    }
    return null;
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input id="input-name" type="text" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input id="input-email" type="email" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input id="input-pass" type="password" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password confirmation:
          <input id="input-conf" type="password" onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Signup;
