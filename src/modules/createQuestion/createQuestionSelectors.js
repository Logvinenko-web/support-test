const selectStatusCreateQuestion = (state) =>
  state.createQuestion.createQuestionstatus;
const selectInputFields = (state) => state.createQuestion.input;
// const selectErrors = (state) => state.login.errors;
const selectCreateQuestionState = (state) => state.createQuestion;

export const createQuestionSelectors = {
  selectStatusCreateQuestion,
  selectInputFields,
  // selectErrors,
  selectCreateQuestionState,
};
