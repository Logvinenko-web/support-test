import api from '../settings/api/api'

const login = (payload) => api.post('/admin/login', payload);

const UserService = {
  login
};

export default UserService;
