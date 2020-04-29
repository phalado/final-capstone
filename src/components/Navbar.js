import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getInstructors } from '../asyncCalls/createInstructor';
import './styles/Navbar.css';

const Navbar = props => {
  const { instructors, addInst } = props;

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
    <nav className="navbar-container">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/instructors" className="navbar-link">Instructors</Link>
      <ul>
        {instructors.map(inst => (
          <Link to={`/instFile/${inst.id}`} key={inst.id} className="navbar-instructors">
            <li>{inst.name.split(' ')[0]}</li>
          </Link>
        ))}
      </ul>
      <Link to="how-to-schedulle" className="navbar-link">How to schedulle a class</Link>
      <Link to="/about" className="navbar-link">About us</Link>
    </nav>
  );
};

Navbar.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  addInst: PropTypes.func.isRequired,
};

export default Navbar;
