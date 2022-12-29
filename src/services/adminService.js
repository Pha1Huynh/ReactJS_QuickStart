import axios from '../axios';
const getAllUsers = () => {
  return axios.get('/api/get-all-users');
};

export { getAllUsers };
