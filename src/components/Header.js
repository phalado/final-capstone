import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { user, logOut } = props;

  if (user.logged) {
    return (
      <header className="header">
        <div>
          <Link to="/">
            <button type="button" className="header-button">
              Home
            </button>
          </Link>
        </div>
        <div>
          <h1>{'Berk\'s Dragon Flying Academy'}</h1>
        </div>
        <div>
          <Link to="/account">
            <button type="button" className="header-button">
              {user.name}
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="header-button"
              onClick={logOut}
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
            Home
          </button>
        </Link>
      </div>
      <div>
        <h1>{'Berk\'s Dragon Flying Academy'}</h1>
      </div>
      <div>
        <Link to="/login">
          <button type="button" className="header-button">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="header-button"
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
