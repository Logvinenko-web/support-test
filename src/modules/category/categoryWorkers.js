import {
  all,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { CategoryService } from '../../services/category.service';
import Notification from '../../services/notification.service';
import { pushCategory, saveCategory } from './categoryActions';
// import Validation from '../../services/validation.service';

function* categoryWorker() {
  try {
    yield put(pushCategory.request());
    const data = yield call(CategoryService.category);
    yield put(saveCategory(data));
    yield put(pushCategory.success());
  } catch (e) {
    Notification.error(e.response?.data?.error);
    yield put(pushCategory.failure());
  }
}

export function* categoryWatcher() {
  yield all([takeLatest(pushCategory.TRIGGER, categoryWorker)]);
}
