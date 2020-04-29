import axios from 'axios';

const createClass = async props => {
  const {
    instuctorID, userID, classTime, status,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/fly_classes/';
  const params = `instructor_id=${instuctorID}&user_id=${userID}&classTime=${classTime}&status=${status}`;

  const response = await axios.post((`${url}?${params}`));
  return response.data;
};

export default createClass;
