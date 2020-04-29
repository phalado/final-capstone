import React from 'react';
import PropTypes from 'prop-types';
import './styles/InstFile.css';
import { Link } from 'react-router-dom';
import getSingleInst from '../helpers/InstructorsHelper';

const InstructorFile = props => {
  const { instructors } = props;
  const instructor = getSingleInst(instructors, 'instFile');
  const {
    id, name, instImage, dragonName, dragonType, dragonImage,
  } = instructor;

  return (
    <div>
      <div className="inst-file-container">
        <div className="inst-image-container">
          <img src={instImage} alt={name} className="inst-file-image" />
        </div>
        <div className="inst-data">
          <h1>{name}</h1>
          <h2>
            {`Dragon: ${dragonName}`}
          </h2>
          <h2>
            {`Dragon type: ${dragonType}`}
          </h2>
          <Link to={`/instSchedule/${id}`}>
            <button type="button">
              Instructor&apos;s schedule
            </button>
          </Link>
        </div>
        <div className="dragon-image-container">
          <img src={dragonImage} alt={dragonName} className="dragon-image" />
        </div>
      </div>
    </div>
  );
};

InstructorFile.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InstructorFile;
