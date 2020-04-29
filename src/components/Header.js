import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = props => {
  const { user, logOut } = props;

  const handleLogout = () => {
    logOut();
    const token = JSON.stringify({
      id: '', name: '', email: '', remember: false,
    });
    localStorage.setItem('localUser', token);
  };

  if (user.logged) {
    return (
      <header className="header">
        <div>
          <Link to="/">
            <button type="button" className="header-button">
              <img src="/contents/httyd-icon2.png" alt="Home" className="header-button-img" />
            </button>
          </Link>
        </div>
        <div>
          <h1>{'Berk\'s Dragon Flying Academy'}</h1>
        </div>
        <div className="account-buttons-container">
          <Link to="/account">
            <button type="button" className="account-button">
              {user.name.split(' ')[0]}
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="account-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div>
        <Link to="/">
          <button type="button" className="header-button">
            <img src="/contents/httyd-icon2.png" alt="Home" className="header-button-img" />
          </button>
        </Link>
      </div>
      <div>
        <h1>{'Berk\'s Dragon Flying Academy'}</h1>
      </div>
      <div>
        <Link to="/login">
          <button type="button" className="account-button">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="account-button"
          >
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    logged: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};

export default Header;
