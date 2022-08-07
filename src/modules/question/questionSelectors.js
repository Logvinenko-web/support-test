const selectQuestion = (state) => state.question;
const selectStatus = (state) => state.question.getQuestionstatus;

export const questionSelectors = {
  selectStatus,
  selectQuestion,
};
