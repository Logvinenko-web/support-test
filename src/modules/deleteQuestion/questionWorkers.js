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
import { deleteQuestion, clearAll } from './questionActions';
// import Validation from '../../services/validation.service';

function* deletequestionWorker({ payload }) {
  try {
    yield put(deleteQuestion.request());
    yield call(QuestionService.deleteQuestion, payload);
    yield put(deleteQuestion.success());
    yield put(clearAll());
  } catch (e) {
    Notification.error(e.response?.data?.error);
    yield put(deleteQuestion.failure());
  }
}

export function* deletequestionWatcher() {
  yield all([takeLatest(deleteQuestion.TRIGGER, deletequestionWorker)]);
}
