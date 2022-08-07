import React, { useEffect, useCallback } from 'react';
import { Greeting } from './Greeting';
import routing from '../routing/routing';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pushQuestion } from '../modules/question/questionActions';
import { categorySelectors } from '../modules/category/categorySelector'
import { pushCategory } from '../modules/category/categoryActions';

export const GreetingContainer = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const { categoryList, categoryStatus } = useSelector(
    categorySelectors.selectCategory
  );

  useEffect(() => {
    dispatch(pushCategory())
  }, []);

const getQuestion = (id)=>{
  dispatch(pushQuestion(id))
  history(routing().quize);
}
 const redirectToAdminPanel = ()=>{
  history(routing().adminPanel);
 }
 const redirectToFirstLine = ()=>{
  history(routing().firstLine);
 }
 

  return <Greeting 
  redirectToAdminPanel={redirectToAdminPanel} 
  redirectToFirstLine={redirectToFirstLine}
  categoryList={categoryList}
  getQuestion={getQuestion}
  />
  
};
