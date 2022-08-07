import api from '../settings/api/api';

const question = (payload) => api.get(`/question?categoryId=${payload}`);
const createQuestion = (payload) => api.post('/question', payload);
const deleteQuestion = (payload) => api.delete(`/question/${payload}`);
export const QuestionService = {
  question,
  createQuestion,
  deleteQuestion,
};
