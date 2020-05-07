import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import getSingleInst from '../helpers/InstructorsHelper';
import './styles/InstFile.css';

const InstructorFile = props => {
  const { instructors, chngWeek } = props;
  const { id } = useParams();
  const instructor = getSingleInst(instructors, 'instFile');
  const {
    name, instImage, dragonName, dragonType, dragonImage,
  } = instructor;

  console.log(name, id);

  return (
    <div>
      <div className="inst-file-container">
        <div className="inst-image-container">
          <img src={instImage} alt={name} className="inst-file-image" />
        </div>
        <div className="inst-data-container">
          <div className="inst-data">
            <h1>{name}</h1>
            <h2>
              {`Dragon: ${dragonName}`}
            </h2>
            <h2>
              {`Dragon type: ${dragonType}`}
            </h2>
            <Link to={`/instSchedule/${id}`}>
              <button type="button" onClick={() => chngWeek(0)} className="inst-file-button">
                Instructor&apos;s schedule
              </button>
            </Link>
          </div>
          <div className="dragon-image-container">
            <img src={dragonImage} alt={dragonName} className="dragon-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

InstructorFile.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  chngWeek: PropTypes.func.isRequired,
};

export default InstructorFile;
