import axios from 'axios';

const createUser = async props => {
  const {
    name, email, password, confirmation,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/';

  const response = await axios.post(`${url}?name=${name}&email=${email}&password=${password}&password_confirmation=${confirmation}`);
  console.log(response);
};

const userLogin = async props => {
  const { email, password } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/login';

  const response = await axios.get(`${url}?email=${email}&password=${password}`);
  console.log(response);
};

export { createUser, userLogin };
