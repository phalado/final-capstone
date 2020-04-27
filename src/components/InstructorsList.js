import React from 'react';
import PropTypes from 'prop-types';
import Instructor from './Instructor';
import './styles/Instructor.css';

const InstructorsList = props => {
  const { instructors } = props;

  return (
    <div>
      <h1 className="mt-3">Check our Dragon Trainers</h1>
      <div className="instructors-list">
        {instructors.map(inst => (
          <Instructor key={inst.id} instructor={inst} />
        ))}
      </div>
    </div>
  );
};

InstructorsList.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InstructorsList;
