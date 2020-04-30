import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const lastMonday = () => {
  switch (moment().format('dddd')) {
    case 'Sunday':
      return 1;
    case 'Monday':
      return 0;
    case 'Tuesday':
      return -1;
    case 'Wednesday':
      return -2;
    case 'Thursday':
      return -3;
    case 'Friday':
      return -4;
    case 'Saturday':
      return -5;
    default:
      return null;
  }
};

const getDay = (value, week) => lastMonday() + value + (7 * week);

const CreateCells = props => {
  const {
    user, date, onClick, classes, signedUsers,
  } = props;
  const classy = classes.filter(cls => moment(cls.classTime).format() === moment(date).format());

  if (classy[0]) {
    const schUser = signedUsers.filter(usr => usr.id === classy[0].user);
    if (schUser.length === 0) schUser.push({ id: 0 });

    if (schUser[0].id === user.id) {
      return (
        <th>
          <div className="cells">
            {schUser[0].name}
            <button
              type="button"
              onClick={() => onClick(date, classy[0].id, true)}
            >
              Cancel
            </button>
          </div>
        </th>
      );
    }

    return (
      <th>
        <div className="cells">
          {schUser[0].name}
        </div>
      </th>
    );
  }

  if (user.logged) {
    return (
      <th>
        <div className="cells">
          Open spot
          <button
            type="button"
            onClick={() => onClick(date, 0, false)}
          >
            Schedule
          </button>
        </div>
      </th>
    );
  }

  return (
    <th>
      <div className="cells">
        Open spot
        <Link to="/login">
          <button
            type="button"
          >
            Login to schedule
          </button>
        </Link>
      </div>
    </th>
  );
};

CreateCells.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  signedUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const CreateRows = props => {
  const {
    user, date, week, clickHandler, classes, signedUsers,
  } = props;

  const tableCells = () => {
    const tc = [<th key={date}>{moment(date).format('LT')}</th>];

    for (let i = 0; i < 5; i += 1) {
      tc.push(<CreateCells
        user={user}
        date={moment(date).add(getDay(i, week), 'days').format()}
        onClick={(dt, id, cancel) => clickHandler(dt, id, cancel)}
        classes={classes}
        signedUsers={signedUsers}
        key={moment(date).add(getDay(i, week), 'days').format()}
      />);
    }
    return tc;
  };

  return (
    <tr className="table-rows">
      {tableCells()}
    </tr>
  );
};

CreateRows.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
  date: PropTypes.string.isRequired,
  week: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  signedUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const CreateUserCells = props => {
  const {
    instructors, date, onClick, classes,
  } = props;
  const classy = classes.filter(cls => moment(cls.classTime).format() === moment(date).format());

  if (classy[0]) {
    const instructor = instructors.filter(inst => inst.id === classy[0].instructor);
    if (instructor.length === 0) instructor.push({ id: 0 });

    return (
      <th>
        <div className="cells">
          {instructor[0].name.split(' ')[0]}
          <button
            type="button"
            onClick={() => onClick(classy[0].id)}
          >
            Cancel
          </button>
        </div>
      </th>
    );
  }

  return (
    <th>
      <div className="cells">
        Open spot
      </div>
    </th>
  );
};

CreateUserCells.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const CreateUserRows = props => {
  const {
    instructors, date, week, clickHandler, classes,
  } = props;

  const tableCells = () => {
    const tc = [<th key={date}>{moment(date).format('LT')}</th>];

    for (let i = 0; i < 5; i += 1) {
      tc.push(<CreateUserCells
        instructors={instructors}
        date={moment(date).add(getDay(i, week), 'days').format()}
        onClick={id => clickHandler(id)}
        classes={classes}
        key={moment(date).add(getDay(i, week), 'days').format()}
      />);
    }
    return tc;
  };

  return (
    <tr className="table-rows">
      {tableCells()}
    </tr>
  );
};

CreateUserRows.propTypes = {
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
  week: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export {
  lastMonday, getDay, CreateRows, CreateUserRows,
};
