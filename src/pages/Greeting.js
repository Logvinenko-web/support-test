import React from 'react';
import { isAdmin } from '../helpers/tokenChecker';
import { ResponsiveAppBar } from '../components/AppBar';
import { WelcomeBook } from '../components/WelcomeBook';
import {MenuItemAppBar} from '../components/MenuItem'
import {SelectedButton} from '../components/SelectedButton'

export const Greeting = ({
  redirectToAdminPanel,
  redirectToFirstLine,
  categoryList,
  getQuestion
}) => {
  return (
    <>
      <ResponsiveAppBar>
     {isAdmin() ? <MenuItemAppBar name={'АДМІНКА'} redirectTo={redirectToAdminPanel}/> : null}
      <MenuItemAppBar name={'ПЕРША ЛІНІЯ'} redirectTo={redirectToFirstLine}/>
      <SelectedButton categoryList={categoryList} getQuestion={getQuestion} title={'TECTИ'}/>
        </ ResponsiveAppBar>
      <WelcomeBook />
    </>
    
  );
};
