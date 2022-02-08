import { all, fork } from 'redux-saga/effects';
import { loginWatcher } from './modules/signIn/signInWorkers';

export default function* rootSaga() {
  yield all([fork(loginWatcher)]);
}
