import axios from 'axios';

const createUser = async props => {
  const {
    name, email, pass, conf,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/users';

  const response = await axios.post(`${url}?name=${name}&email=${email}&password=${pass}&password_confirmation=${conf}`);
  console.log(response);
  return response.data;
};

const userLogin = async props => {
  const { email, pass } = props;
  const url = 'https://dragon-test-drive-api.herokuapp.com/login';

  const response = await axios.get(`${url}?email=${email}&password=${pass}`);
  return response.data;
};

export { createUser, userLogin };
