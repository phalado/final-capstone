import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getInstructors } from '../asyncCalls/createInstructor';
import { getClasses } from '../asyncCalls/createClass';
import { getSignedUsers } from '../asyncCalls/createUser';
import './styles/Navbar.css';

const Navbar = props => {
  const {
    instructors, addInst, addClassy, addUsr,
  } = props;

  const handleAddInstructor = array => {
    if (array !== []) {
      array.forEach(value => {
        addInst(value);
      });
    }
  };

  const handleAddClasses = array => {
    if (array !== []) {
      array.forEach(value => {
        addClassy(value);
      });
    }
  };

  const handleAddUsers = array => {
    if (array !== []) {
      array.forEach(value => {
        addUsr(value);
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchInstructors = async () => {
      const response = await getInstructors();

      if (mounted) {
        const newArrayInst = [];
        response.forEach(value => {
          newArrayInst.push(value);
        });

        handleAddInstructor(newArrayInst);
      }
    };

    const fetchClasses = async () => {
      const response = await getClasses();

      if (mounted) {
        const newArrayClass = [];
        response.forEach(value => {
          newArrayClass.push(value);
        });

        handleAddClasses(newArrayClass);
      }
    };

    const fetchUsers = async () => {
      const response = await getSignedUsers();

      if (mounted) {
        const newArrayUser = [];
        response.forEach(value => {
          newArrayUser.push(value);
        });

        handleAddUsers(newArrayUser);
      }
    };

    fetchInstructors();
    fetchClasses();
    fetchUsers();

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
  addClassy: PropTypes.func.isRequired,
  addUsr: PropTypes.func.isRequired,
};

export default Navbar;
