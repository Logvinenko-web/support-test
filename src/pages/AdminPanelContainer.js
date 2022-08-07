import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signUpSelectors } from '../modules/signUp/signUpSelectors';
import {
  REQUEST,
  SUCCESS,
  CREATE_USER,
  CREATE_QUESTION,
} from '../constants/constants';
import { AdminPanel } from './AdminPanel';
import { pushSignUp, saveSignUpField } from '../modules/signUp/signUpActions';
import {
  pushCreateQuestion1,
  saveCreateQuestionField,
} from '../modules/createQuestion/createQuestionActions';
import { questionSelectors } from '../modules/question/questionSelectors';
import { categorySelectors } from '../modules/category/categorySelector';
import { pushQuestion } from '../modules/question/questionActions';
import { pushCategory } from '../modules/category/categoryActions';
import { deleteQuestion } from '../modules/deleteQuestion/questionActions';
import { deleteQuestionSelectors } from '../modules/deleteQuestion/questionSelectors';
import { Loader } from '../components/Loader';
import routing from '../routing/routing';

import { createQuestionSelectors } from '../modules/createQuestion/createQuestionSelectors';
export const AdminPanelContainer = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [currentModal, setCurrentModal] = React.useState(CREATE_USER);
  const [mode, setMode] = React.useState('');
  const [questionId, setQuestionId] = React.useState('');

  const { statusDeleteQuestion } = useSelector(
    deleteQuestionSelectors.deleteStatus
  );
  const { categoryList } = useSelector(categorySelectors.selectCategory);
  const { input, status } = useSelector(signUpSelectors.selectUserState);
  const { questionList, getQuestionstatus } = useSelector(
    questionSelectors.selectQuestion
  );
  const { inputQuestion, createQuestionstatus } = useSelector(
    createQuestionSelectors.selectCreateQuestionState
  );

  const handleOpenCreateUser = () => {
    setOpen(true);
    setCurrentModal(CREATE_USER);
  };
  const handleOpenCreateQuestion = () => {
    setOpen(true);
    setCurrentModal(CREATE_QUESTION);
    setMode('CREATE_QUESTION');
  };
  const handleOpenUpdateQuestion = (id) => {
    // setOpen(true);
    // setCurrentModal(CREATE_QUESTION)
    // setMode('UPDATE_QUESTION')
    //  dispatch(pushQuestion(id))
    alert('Пока не працює :)');
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(pushCategory());
    if (status === SUCCESS) {
      setOpen(false);
    }
    if (
      statusDeleteQuestion === SUCCESS ||
      createQuestionstatus === SUCCESS ||
      getQuestionstatus === SUCCESS
    ) {
      dispatch(pushQuestion(questionId));
    }
  }, [statusDeleteQuestion, createQuestionstatus]);

  const handleSubmit1 = useCallback(
    (e) => {
      e.preventDefault();
      if (currentModal === CREATE_USER) {
        dispatch(pushSignUp(input));
      } else {
        dispatch(pushCreateQuestion1(inputQuestion));
      }
    },

    [dispatch, currentModal, input, inputQuestion]
  );

  const handleChange = useCallback(
    ({ target }) => {
      if (currentModal === CREATE_USER) {
        dispatch(saveSignUpField(target));
      } else {
        dispatch(saveCreateQuestionField(target));
      }
    },
    [currentModal]
  );

  const getQuestion = (id) => {
    setQuestionId(id);
    dispatch(pushQuestion(id));
  };
  const deleteQuestionId = (id) => {
    dispatch(deleteQuestion(id));
  };
  const redirectToGreeting = () => {
    history(routing().greeting);
  };
  const loading =
    statusDeleteQuestion === REQUEST ||
    createQuestionstatus === REQUEST ||
    getQuestionstatus === REQUEST;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AdminPanel
          handleOpenCreateUser={handleOpenCreateUser}
          openModal={open}
          handleClose={handleClose}
          input={input}
          inputQuestion={inputQuestion}
          handleSubmit={handleSubmit1}
          redirectToGreeting={redirectToGreeting}
          handleChange={handleChange}
          currentModal={currentModal}
          handleOpenCreateQuestion={handleOpenCreateQuestion}
          questionList={questionList}
          deleteQuestionId={deleteQuestionId}
          getQuestion={getQuestion}
          categoryList={categoryList}
          handleOpenUpdateQuestion={handleOpenUpdateQuestion}
          mode={mode}
        />
      )}
    </>
  );
};
