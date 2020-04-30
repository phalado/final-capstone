import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { lastMonday, CreateRows } from '../helpers/TableHelper';
import getSingleInst from '../helpers/InstructorsHelper';
import { createClass, deleteClass } from '../asyncCalls/createClass';
import './styles/Tables.css';

const InstructorsSchedule = props => {
  const {
    instructors, user, classes, signedUsers, addClassy, removeClassy,
  } = props;
  const instructor = getSingleInst(instructors, 'instSchedule');
  const headFormat = 'dddd - MMMM Do';
  const rowFormat = 'YYYY-MM-DDT';

  const handleClick = async (date, id, cancel) => {
    if (cancel) {
      await deleteClass(id);
      removeClassy(id);
    } else {
      const classy = await createClass({
        instuctorID: instructor.id,
        userID: user.id,
        classTime: date,
        status: false,
      });
      addClassy(classy);
    }
  };

  const tableHead = () => {
    const th = [<th key={moment()}>Time</th>];
    for (let i = 0; i < 5; i += 1) {
      const day = moment().add(lastMonday() + i, 'days').format(headFormat);
      th.push(<th key={day}>{day}</th>);
    }
    return th;
  };

  const tableRows = () => {
    const tr = [];
    for (let i = 8; i < 18; i += 1) {
      const j = i < 10 ? `0${i}` : i;
      tr.push(<CreateRows
        user={user}
        date={moment().format(`${rowFormat}${j}:00`)}
        clickHandler={handleClick}
        classes={classes}
        signedUsers={signedUsers}
        key={moment().format(`${rowFormat}${j}:00`)}
      />);
    }
    return tr;
  };

  return (
    <div>
      <h1 className="table-title">{`${instructor.name.split(' ')[0]}'s schedule`}</h1>
      <table className="table table-dark table-striped">
        <thead className="table-head">
          <tr className="table-rows">
            {tableHead()}
          </tr>
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
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  signedUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  addClassy: PropTypes.func.isRequired,
  removeClassy: PropTypes.func.isRequired,
};

export default InstructorsSchedule;
