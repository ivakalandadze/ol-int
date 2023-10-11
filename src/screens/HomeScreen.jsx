import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import MainDataContext from '../context/dataContext';

export default function HomeScreen() {
  const {setMainData} = useContext(MainDataContext);

  const getData = async () => {
    const json = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await json.json();

    setMainData(response);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={getData}>
        <Text>Get Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
