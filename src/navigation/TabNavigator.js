import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [data, setData] = useState({});

  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const parsedResponse = await response.json();
    setData(parsedResponse);
    console.log(parsedResponse[0].title);
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        children={() => <HomeScreen onPress={fetchData} />}
      />
      <Tab.Screen
        name="Settings"
        children={() => <SearchScreen data={data} />}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
