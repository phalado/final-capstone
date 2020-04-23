import React, { useState, useEffect } from 'react';
import { getInstructors } from '../asyncCalls/createInstructor';
import './App.css';

const App = props => {
  const [instructor, setInstructor] = useState();

  useEffect(() => {
    let mounted = true;

    const instructors = async () => {
      const response = await getInstructors();

      if (mounted) {
        setInstructor(response);
      }

      return response;
    };
    instructors();

    return () => {
      mounted = false;
    };
  }, instructor);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
