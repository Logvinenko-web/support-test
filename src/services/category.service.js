import api from '../settings/api/api';

const createCategory = (payload) => api.post('/categories', payload);
const category = () => api.get('/categories');

export const CategoryService = {
  category,
  createCategory,
};
