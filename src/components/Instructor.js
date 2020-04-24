import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Instructor = props => {
  const { instructor } = props;
  const { id, name, instImage } = instructor;

  return (
    <div className="inst-container">
      <h2 className="inst-name">{name.split(' ')[0]}</h2>
      <Link to={`/instFile/${id}`}>
        <button
          className="inst-button"
          type="button"
        >
          <img src={instImage} alt={name} className="inst-image" />
        </button>
      </Link>
    </div>
  );
};

Instructor.propTypes = {
  instructor: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    instImage: PropTypes.string,
  }).isRequired,
};

export default Instructor;
