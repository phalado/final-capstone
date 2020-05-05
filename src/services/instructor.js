import axios from 'axios';

const createInstructor = async props => {
  const {
    name, instImage, dragonName, dragonType, dragonImage,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/instructors/';
  const params = `name=${name}&instImage=${instImage}&dragonName=${dragonName}&dragonType=${dragonType}&dragonImage=${dragonImage}`;

  const response = await axios.post(`${url}?${params}`);
  return response;
};

const getInstructors = async () => {
  const url = 'https://dragon-test-drive-api.herokuapp.com/instructors';

  const response = await axios.get(url);
  return response.data;
};

export { createInstructor, getInstructors };
