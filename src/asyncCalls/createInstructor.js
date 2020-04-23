import axios from 'axios';

const createInstructor = async props => {
  const {
    name, instImage, dragonName, dragonType, dragonImage,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/instructors/';

  const response = await axios.post(`${url}?name=${name}&instImage=${instImage}&dragonName=${dragonName}&dragonType=${dragonType}&dragonImage=${dragonImage}`);
  console.log(response);
  return response;
};

const getInstructors = async () => {
  console.log('here');
  const url = 'https://dragon-test-drive-api.herokuapp.com/instructors';
  const headers = {
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Headers': 'Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  const response = await axios.get(url, {headers});
  console.log(response);
  return response;
};

export { createInstructor, getInstructors };
