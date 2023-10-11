import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './TabNavigator';

const NavContainer = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default NavContainer;
