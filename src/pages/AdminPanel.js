import * as React from 'react';
import { REQUEST, SUCCESS, CREATE_USER } from '../constants/constants';

import { MuiModal } from '../components/Modal';
import { UserForm } from '../components/UserForm';
import { QuestionForm } from '../components/QuestionForm';
import QuestionCards from '../components/Card';
import { ResponsiveAppBar } from '../components/AppBar';
import {MenuItemAppBar} from '../components/MenuItem'
import {SelectedButton} from '../components/SelectedButton'

export const AdminPanel = ({
  handleOpenCreateUser,
  handleOpenCreateQuestion,
  openModal,
  handleClose,
  input,
  inputQuestion,
  handleSubmit,
  handleChange,
  currentModal,
  questionList,
  deleteQuestionId,
  getQuestion,
  categoryList,
  handleOpenUpdateQuestion,
  mode,
  redirectToGreeting,
}) => {
  return (
    <>
     <ResponsiveAppBar>
      <MenuItemAppBar name={'Створити юзера'} 
       redirectTo={handleOpenCreateUser}
      />
      <MenuItemAppBar name={'Створити питання'} 
       redirectTo={handleOpenCreateQuestion}
      />
      <SelectedButton categoryList={categoryList} getQuestion={getQuestion} title={'Категорії'}/>    
      <MenuItemAppBar name={'Головна'} 
       redirectTo={redirectToGreeting}
      />
        </ ResponsiveAppBar>
      <div className="admin-panel">
        <MuiModal open={openModal} handleClose={handleClose}>
          {currentModal === CREATE_USER ? (
            <UserForm
              input={input}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          ) : (
            <QuestionForm
              inputQuestion={inputQuestion}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              categoryList={categoryList}
              mode={mode}
            />
          )}
        </MuiModal>
      </div>
      <div></div>
      <div>
        <QuestionCards
          questionList={questionList}
          handleOpenUpdateQuestion={handleOpenUpdateQuestion}
          deleteQuestionId={deleteQuestionId}
        />
      </div>
    </>
  );
};
