import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const {Navigator, Screen} = createBottomTabNavigator();

function MyTabs() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Search" component={SearchScreen} />
    </Navigator>
  );
}

export default MyTabs;
