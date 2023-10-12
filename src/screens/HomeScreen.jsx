import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/ContextProvider';

export default function HomeScreen() {
  const fetchDataHandler = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Fetch" onPress={fetchDataHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
