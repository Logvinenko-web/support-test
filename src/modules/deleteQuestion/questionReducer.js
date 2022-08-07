import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './questionActions';
import { makeStatusWithResetReducer } from '../../helpers/reduxHelpers';

const questionInitial = [];

// const questionList = handleActions(
//   {
//     [actions.saveQuestion.TRIGGER](_, { payload }) {
//       return payload;
//     },
//     [actions.clearAll.TRIGGER]() {
//       return questionInitial;
//     },
//   },
//   questionInitial
// );

export const deleteQuestion = combineReducers({
  statusDeleteQuestion: makeStatusWithResetReducer(
    actions.deleteQuestion,
    actions.clearAll
  ),
});
