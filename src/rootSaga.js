import { all, fork } from 'redux-saga/effects';
import { loginWatcher } from './modules/signIn/signInWorkers';
import { questionWatcher } from './modules/question/questionWorkers';
import { answerWatcher } from './modules/answer/answerWorkers';

export default function* rootSaga() {
  yield all([fork(loginWatcher), fork(questionWatcher), fork(answerWatcher)]);
}
