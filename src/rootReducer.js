import { combineReducers } from 'redux';
import { login } from './modules/signIn/signInReducer';
import { question } from './modules/question/questionReducer';
import { answer } from './modules/answer/answerReducer';

/* Unite all reducers */
const rootReducer = combineReducers({
  login,
  question,
  answer
});

export default (state, action) => {
  // if (action.type === pushLogout.TRIGGER) {
  //   state = undefined;
  // }

  return rootReducer(state, action);
};
