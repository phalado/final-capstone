import axios from 'axios';

const createInstructor = async props => {
  const {
    name, instImage, dragonName, dragonType, dragonImage,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/instructors';
  const params = {
    name,
    instImage,
    dragonName,
    dragonType,
    dragonImage,
  };

  const response = await axios.post(url, params);
  console.log(response);
};

const getInstructors = async () => {
  const url = 'https://dragon-test-drive-api.herokuapp.com/instructors';
  const response = await axios.post(url);
  console.log(response);
};

export { createInstructor, getInstructors };
