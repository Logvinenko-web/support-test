import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './categoryActions';
import { makeStatusWithResetReducer } from '../../helpers/reduxHelpers';

const categoryInitial = [];

const categoryList = handleActions(
  {
    [actions.saveCategory.TRIGGER](_, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return categoryInitial;
    },
  },
  categoryInitial
);

export const category = combineReducers({
  categoryStatus: makeStatusWithResetReducer(actions.pushCategory, actions.clearAll),
  categoryList,
});
