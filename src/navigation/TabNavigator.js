import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from './TabBar';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
const Tab = createBottomTabNavigator();

function MyTabs() {
  const TabBarComponent = () => <TabBar />;

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={TabBarComponent}>
        <Tab.Screen
          component={HomeScreen}
          name={'HomeScreen'}
          options={{headerShown: false}}
        />
        <Tab.Screen
          component={SearchScreen}
          name={'SearchScreen'}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
