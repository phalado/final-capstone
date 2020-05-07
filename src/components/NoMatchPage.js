import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage = () => (
  <div className="error-page">
    <h1 className="mb-4">404 - Not found</h1>
    <img src="/contents/404.gif" alt="404" className="mx-auto" />
    <Link to="/">
      <h3 className="mt-4">Go to home</h3>
    </Link>
  </div>
);

export default NoMatchPage;
