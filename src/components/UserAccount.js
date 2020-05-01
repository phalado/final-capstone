import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { updateUser } from '../asyncCalls/createUser';

const UserAccount = props => {
  const { user, editUser } = props;
  const { id, name, email } = user;

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [pass, setPass] = useState();
  const [conf, setConf] = useState();

  const handleChange = event => {
    switch (event.target.id) {
      case 'input-name':
        setUserName(event.target.value);
        break;
      case 'input-email':
        setUserEmail(event.target.value);
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
    const response = await updateUser({
      id, userName, userEmail, pass, conf,
    });
    if (response.status) {
      const token = JSON.stringify({
        id, name: userName, email: userEmail, remember: true,
      });
      localStorage.setItem('localUser', token);
      editUser({ id, userName, userEmail });
      return <Redirect to="/account" />;
    }
    return null;
  };

  return (
    <div>
      <div>
        <h1 className="my-4">{name}</h1>
        <h2 className="mb-5">{email}</h2>
      </div>
      <div className="signup">
        <h2>Fill the form bellow to change your data</h2>
        <h5>Leave each field that you do not want to change blank</h5>
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
    </div>
  );
};

UserAccount.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  editUser: PropTypes.func.isRequired,
};

export default UserAccount;
