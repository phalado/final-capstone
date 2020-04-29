import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { lastMonday, CreateRows } from '../helpers/TableHelper';
import getSingleInst from '../helpers/InstructorsHelper';
import createClass from '../asyncCalls/createClass';
import './styles/Tables.css';

const InstructorsSchedule = props => {
  const {
    instructors, user, classes, addClassy,
  } = props;
  const instructor = getSingleInst(instructors, 'instSchedule');
  const headFormat = 'dddd - MMMM Do';
  const rowFormat = 'YYYY-MM-DDT';

  const handleClick = async date => {
    const classy = await createClass({
      instuctorID: instructor.id,
      userID: user.id,
      classTime: date,
      status: false,
    });
    console.log(classy);
    addClassy(classy);
  };

  const tableHead = () => {
    const th = [<th key={moment()}>Time</th>];
    for (let i = 0; i < 5; i += 1) {
      th.push(<th>{moment().add(lastMonday() + i, 'days').format(headFormat)}</th>);
    }
    return th;
  };

  const tableRows = () => {
    const tr = [];
    for (let i = 8; i < 18; i += 1) {
      const j = i < 10 ? `0${i}` : i;
      tr.push(<CreateRows
        date={moment().add(lastMonday(), 'days').format(`${rowFormat}${j}:00`)}
        clickHandler={handleClick}
      />);
    }
    return tr;
  };

  return (
    <div>
      <h1 className="table-title">{`${instructor.name.split(' ')[0]}'s schedule`}</h1>
      <table className="table table-dark table-striped">
        <thead className="table-head">
          {tableHead()}
        </thead>
        <tbody>
          {tableRows()}
        </tbody>
      </table>
    </div>
  );
};

InstructorsSchedule.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
  addClassy: PropTypes.func.isRequired,
};

export default InstructorsSchedule;
