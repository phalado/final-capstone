import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

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
};

const CreateRows = props => {
  const {
    user, date, clickHandler, classes, signedUsers,
  } = props;

  const tableCells = () => {
    const tc = [<th key={date}>{moment(date).format('LT')}</th>];

    for (let i = 0; i < 5; i += 1) {
      tc.push(<CreateCells
        user={user}
        date={moment(date).add(lastMonday() + i, 'days').format()}
        onClick={(dt, id, cancel) => clickHandler(dt, id, cancel)}
        classes={classes}
        signedUsers={signedUsers}
        key={moment(date).add(lastMonday() + i, 'days').format()}
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

CreateCells.propTypes = {
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  signedUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CreateRows.propTypes = {
  date: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  signedUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { lastMonday, CreateCells, CreateRows };
