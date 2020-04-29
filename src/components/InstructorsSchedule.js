import React from 'react';
import moment from 'moment';
import { lastMonday, CreateRows } from '../helpers/TableHelper';
import getSingleInst from '../helpers/InstructorsHelper';
import './styles/Tables.css';

const InstructorsSchedule = props => {
  const {
    instructors, user, classes, addClassy,
  } = props;
  const instructor = getSingleInst(instructors, 'instSchedule');
  const headFormat = 'dddd - MMMM Do';
  const rowFormat = 'YYYY-MM-DDT';

  return (
    <div>
      <h1 className="table-title">{`${instructor.name.split(' ')[0]}'s schedule`}</h1>
      <table className="table table-dark table-striped">
        <thead className="table-head">
          <tr>
            <th>Time</th>
            <th>{moment().add(lastMonday(), 'days').format(headFormat)}</th>
            <th>{moment().add(lastMonday() + 1, 'days').format(headFormat)}</th>
            <th>{moment().add(lastMonday() + 2, 'days').format(headFormat)}</th>
            <th>{moment().add(lastMonday() + 3, 'days').format(headFormat)}</th>
            <th>{moment().add(lastMonday() + 4, 'days').format(headFormat)}</th>
          </tr>
        </thead>
        <tbody>
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}08:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}09:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}10:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}11:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}12:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}13:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}14:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}15:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}16:00`)} />
          <CreateRows date={moment().add(lastMonday(), 'days').format(`${rowFormat}17:00`)} />
        </tbody>
      </table>
    </div>
  );
};

export default InstructorsSchedule;
