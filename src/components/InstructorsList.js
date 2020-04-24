import React from 'react';
import PropTypes from 'prop-types';
import Instructor from './Instructor';

const InstructorsList = props => {
  const { instructors } = props;

  return (
    <div>
      <div className="instructors-list">
        {instructors.map(inst => (
          <div key={inst.id}>
            <Instructor instructor={inst} />
          </div>
        ))}
      </div>
    </div>
  );
};

InstructorsList.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InstructorsList;
