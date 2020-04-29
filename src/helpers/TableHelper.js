import React from 'react';
import moment from 'moment';

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
  const { date } = props;
  return (
    <th>
      {date}
    </th>
  );
};

const CreateRows = props => {
  const { date } = props;

  return (
    <tr>
      <th>{moment(date).format('LT')}</th>
      <CreateCells date={moment(date).format('LLL')} />
      <CreateCells date={moment(date).add(1, 'days').format('LLL')} />
      <CreateCells date={moment(date).add(2, 'days').format('LLL')} />
      <CreateCells date={moment(date).add(3, 'days').format('LLL')} />
      <CreateCells date={moment(date).add(4, 'days').format('LLL')} />
    </tr>
  );
};

export { lastMonday, CreateCells, CreateRows };
