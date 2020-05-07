import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { CreateUserRows, getDay } from '../helpers/TableHelper';
import { deleteClass } from '../services/classes';
import './styles/Tables.css';

const UserSchedule = props => {
  const {
    user, instructors, classes, week, removeClassy, chngWeek,
  } = props;
  const headFormat = 'dddd - MMMM Do';
  const rowFormat = 'YYYY-MM-DDT';

  if (!user.logged) return <Redirect to="/login" />;

  const handleClick = async id => {
    await deleteClass(id);
    removeClassy(id);
  };

  const tableHead = () => {
    const th = [<th key={moment()}>Time</th>];
    for (let i = 0; i < 5; i += 1) {
      const day = moment().add(getDay(i, week), 'days').format(headFormat);
      th.push(<th key={day}>{day}</th>);
    }
    return th;
  };

  const tableRows = () => {
    const tr = [];
    for (let i = 8; i < 18; i += 1) {
      const j = i < 10 ? `0${i}` : i;
      tr.push(<CreateUserRows
        instructors={instructors}
        date={moment().format(`${rowFormat}${j}:00`)}
        week={week}
        clickHandler={handleClick}
        classes={classes.filter(classy => classy.user === user.id)}
        key={moment().format(`${rowFormat}${j}:00`)}
      />);
    }
    return tr;
  };

  return (
    <div>
      <h1 className="table-title">{`${user.name.split(' ')[0]}'s schedule`}</h1>
      <div className="table-container">
        <Link to="/userSchedule" className="next-prev width-bigger-900">
          <button
            type="button"
            className="home-buttons home-signup-button"
            onClick={() => chngWeek(-1)}
          >
            <img src="/contents/prev.png" alt="Signup" className="table-liks-images" />
            <p>Previous Week</p>
          </button>
        </Link>
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
        <div>
          <Link to="/userSchedule" className="next-prev width-smaller-900">
            <button
              type="button"
              className="home-buttons home-signup-button"
              onClick={() => chngWeek(-1)}
            >
              <img src="/contents/prev.png" alt="Signup" className="table-liks-images" />
              <p>Previous Week</p>
            </button>
          </Link>
          <Link to="/userSchedule" className="next-prev np-right">
            <button
              type="button"
              className="home-buttons home-signup-button"
              onClick={() => chngWeek(1)}
            >
              <img src="/contents/next.png" alt="Signup" className="table-liks-images" />
              <p>Next Week</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

UserSchedule.propTypes = {
  user: PropTypes.shape({
    logged: PropTypes.bool,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  week: PropTypes.number.isRequired,
  removeClassy: PropTypes.func.isRequired,
  chngWeek: PropTypes.func.isRequired,
};

export default UserSchedule;
