import {StyleSheet, Text, View, Button} from 'react-native';

import React, {useContext} from 'react';
import {UserContext} from '../dataContext';
import axios from 'axios';

export default function HomeScreen() {
  const {data, setData} = useContext(UserContext);

  const handlePress = () => {
    axios
      .request('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.data)
      .then(resData => setData(resData))
      .catch(err => console.log(err));
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        onPress={handlePress}
        title="Get"
        color="#841584"
        accessibilityLabel="Learn more about
      this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
