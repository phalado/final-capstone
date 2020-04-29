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
  const { date, onClick } = props;
  return (
    <th>
      <button
        type="button"
        onClick={() => onClick(date)}
      >
        Schedule
      </button>
    </th>
  );
};

const CreateRows = props => {
  const { date, clickHandler } = props;

  const tableCells = () => {
    const tc = [<th key={date}>{moment(date).format('LT')}</th>];
    for (let i = 0; i < 5; i += 1) {
      tc.push(<CreateCells
        date={date}
        onClick={value => clickHandler(value)}
      />);
    }
    return tc;
  };

  return (
    <tr>
      {tableCells()}
    </tr>
  );
};

CreateCells.propTypes = {
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

CreateRows.propTypes = {
  date: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export { lastMonday, CreateCells, CreateRows };
