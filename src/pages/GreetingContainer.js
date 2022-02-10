import React from 'react';
import { useSelector } from 'react-redux';
import { Greeting } from './Greeting';
import routing from '../routing/routing';
import { useNavigate } from 'react-router-dom';
import { questionSelectors } from '../modules/question/questionSelectors';

export const GreetingContainer = () => {
  const history = useNavigate();

  const { status } = useSelector(questionSelectors.selectQuestion);
  const redirectTOQuize = () => {
    history(routing().quize);
  };

  return <Greeting redirectToQuize={redirectTOQuize} />;
};
