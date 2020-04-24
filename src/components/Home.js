import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  const { instructors } = props;

  if (instructors) {
    return (
      <div className="home">
        <h1 className="home-tittle">{'Welcome to Berk\'s Dragon Flying Academy'}</h1>
        <Link to={'/login'}>
          <button type="button">Login</button>
        </Link>
        <Link to={'/signup'}>
          <button type="button">Signup</button>
        </Link>
        <ul>
          {instructors.map(inst => (<li key={inst.id}>{inst.name}</li>))}
        </ul>
      </div>
    );
  }
  return (
    <div className="home">
      <h1 className="home-tittle">{'Welcome to Berk\'s Dragon Flying Academy'}</h1>
    </div>
  );
};

export default Home;
