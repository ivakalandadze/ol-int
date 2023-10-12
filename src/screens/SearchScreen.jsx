import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {UserContext} from '../dataContext';

export default function SearchScreen() {
  const {data} = useContext(UserContext);
  console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <View> {item.title}</View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
