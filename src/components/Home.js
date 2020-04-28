import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => (
  <div className="home">
    <h1 className="home-tittle">Welcome to Berk</h1>
    <img src="./contents/berk.jpg" alt="Berk" />
    <h2 className="home-tittle">&quot;Life here is amazing. Dragons used to be a bit of a problem, but now they’ve all moved in.&quot;</h2>
    <h2 className="home-tittle">And now we have the only in the world Dragon Flying Academy</h2>
    <Link to="/instructors">
      <button type="button">
        <img src="./contents/instructors.jpg" alt="Instructors" />
      </button>
    </Link>
    <Link to="/login">
      <button type="button">Login</button>
    </Link>
    <Link to="/signup">
      <button type="button">Signup</button>
    </Link>
  </div>
);

export default Home;
