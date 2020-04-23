import axios from 'axios';

const createClass = async props => {
  const {
    instuctorID, userID, classTime, status,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/';
  const params = {
    instuctorID,
    userID,
    classTime,
    status,
  };

  const response = await axios.post(url, params);
  console.log(response);
};

export default createClass;
