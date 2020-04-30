import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserAccount = props => {
  const { user, editUser } = props;
  const { id, name, email } = user;

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [pass, setPass] = useState();
  const [conf, setConf] = useState();


  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default UserAccount;
