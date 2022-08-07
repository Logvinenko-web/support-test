import React from 'react';
import { FirstLine } from './FirstLine';
import routing from '../routing/routing';
import { useNavigate } from 'react-router-dom';


export const FirstLineContainer = () => {
  const history = useNavigate();
 const redirectToGreeting = ()=>{
  history(routing().greeting);
 }

 

  return <FirstLine 
  redirectToGreeting={redirectToGreeting} 
  />
  
};