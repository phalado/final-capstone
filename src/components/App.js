import React, { useEffect } from 'react';
import { getInstructors } from '../asyncCalls/createInstructor';
import './App.css';

const App = props => {
  const {
    user, instructors, classes, logIn, logOut, addInst,
  } = props;

  const handleAddInstructor = array => {
    if (array !== []) {
      array.forEach(value => {
        addInst(value);
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchInstructors = async () => {
      const response = await getInstructors();

      if (mounted) {
        const newArray = [];
        response.forEach(value => {
          newArray.push(value);
        });

        handleAddInstructor(newArray);
      }
    };

    fetchInstructors();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {instructors.forEach(value => <li>{value.name}</li>)}
        </ul>
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
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit
  //         {' '}
  //         <code>src/App.js</code>
  //         {' '}
  //         and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
};

export default App;
