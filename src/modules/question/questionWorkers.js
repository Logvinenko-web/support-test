import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { QuestionService } from '../../services/question.service';
import Notification from '../../services/notification.service';
import { pushQuestion, saveQuestion } from './questionActions';
// import Validation from '../../services/validation.service';

function* questionWorker({ payload }) {
  try {
    yield put(pushQuestion.request());
    const data = yield call(QuestionService.question, payload);
    yield put(saveQuestion(data));
    yield put(pushQuestion.success());
  } catch (e) {
    Notification.error(e.response?.data?.error);
    yield put(pushQuestion.failure());
  }
}

export function* questionWatcher() {
  yield all([takeLatest(pushQuestion.TRIGGER, questionWorker)]);
}
