import api from '../settings/api/api'

const login = (payload) => api.post('/signin', payload);

const UserService = {
  login
};

export default UserService;
