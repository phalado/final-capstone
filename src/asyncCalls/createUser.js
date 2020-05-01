import axios from 'axios';

const createUser = async props => {
  const {
    name, email, pass, conf,
  } = props;

  const url = 'https://dragon-test-drive-api.herokuapp.com/users';
  const params = `name=${name}&email=${email}&password=${pass}&password_confirmation=${conf}`;

  const response = await axios.post(`${url}?${params}`);
  return response.data;
};

const updateUser = async props => {
  const {
    id, userName, userEmail, pass, conf,
  } = props;

  const url = `https://dragon-test-drive-api.herokuapp.com/users/${id}`;
  const params = pass ? `name=${userName}&email=${userEmail}&password=${pass}&password_confirmation=${conf}`
    : `name=${userName}&email=${userEmail}`;

  const response = await axios.patch(`${url}?${params}`);
  return response.data;
};

const userLogin = async props => {
  const { email, pass } = props;
  const url = 'https://dragon-test-drive-api.herokuapp.com/login';
  const params = `email=${email}&password=${pass}`;

  const response = await axios.get(`${url}?${params}`);
  return response.data;
};

const getUser = async props => {
  const { id } = props;
  const url = 'https://dragon-test-drive-api.herokuapp.com/users';
  const params = `user_id=${id}`;

  const response = await axios.get(`${url}?${params}`);
  return response.data;
};

const getSignedUsers = async () => {
  const url = 'https://dragon-test-drive-api.herokuapp.com/users';

  const response = await axios.get(`${url}`);
  return response.data;
};

export {
  createUser, updateUser, userLogin, getUser, getSignedUsers,
};
