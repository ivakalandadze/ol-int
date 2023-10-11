import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import MainDataContext from '../context/dataContext';

export default function SearchScreen() {
  const {mainData} = useContext(MainDataContext);

  const [searchValue, setSearchValue] = useState('');

  const filterData = () => {};

  return (
    <ScrollView>
      <TextInput value={searchValue} onChangeText={setSearchValue} />
      {mainData.map(el => {
        return (
          <View key={el.id}>
            <Text>{el.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
