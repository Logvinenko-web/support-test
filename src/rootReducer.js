import { combineReducers } from 'redux';
import { login } from './modules/signIn/signInReducer';
import { createUser } from './modules/signUp/signUpReducer';
import { question } from './modules/question/questionReducer';
import { createQuestion } from './modules/createQuestion/createQuestionReducer';
import { answer } from './modules/answer/answerReducer';
import { category } from './modules/category/categoryReducer';
import { deleteQuestion } from './modules/deleteQuestion/questionReducer';

/* Unite all reducers */
const rootReducer = combineReducers({
  login,
  question,
  answer,
  createUser,
  createQuestion,
  category,
  deleteQuestion,
});

export default (state, action) => {
  // if (action.type === pushLogout.TRIGGER) {
  //   state = undefined;
  // }

  return rootReducer(state, action);
};
