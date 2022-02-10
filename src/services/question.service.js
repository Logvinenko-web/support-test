import api from '../settings/api/api';

const question = () => api.get('/question');

const QuestionService = {
  question,
};

export default QuestionService;
