import axios from 'axios';

const createClass = async props => {
  const {
    instuctorID, userID, classTime, status,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/';

  const response = await axios.post((`${url}?instuctor_id=${instuctorID}&user_id=${userID}&classTime=${classTime}&status=${status}`));
  console.log(response);
};

export default createClass;
