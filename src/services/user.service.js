import api from '../settings/api/api';

const login = (payload) => api.post('/user/signin', payload);

const UserService = {
  login,
};

export default UserService;
