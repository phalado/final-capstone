import axios from 'axios';

const createUser = async props => {
  const {
    name, email, password, confirmation,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/';
  const params = {
    name,
    email,
    password,
    password_confirmation: confirmation,
  };

  const response = await axios.post(url, params);
  console.log(response);
};

const userLogin = async props => {
  const { email, password } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/login';
  const params = { email, password };

  const response = await axios.get(url, params);
  console.log(response);
};

export { createUser, userLogin };
