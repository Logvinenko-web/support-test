import * as React from 'react';
import { TabDays } from '../components/Tab';
import { ResponsiveAppBar } from '../components/AppBar';
import {MenuItemAppBar} from '../components/MenuItem'

export const FirstLine = ({redirectToGreeting}) => {
  return (
    <>
    <ResponsiveAppBar>
      <MenuItemAppBar name={'Головна'} 
       redirectTo={redirectToGreeting}
      />
        </ ResponsiveAppBar>
      <TabDays />
    </>
  );
};
