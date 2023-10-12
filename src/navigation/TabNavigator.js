import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
