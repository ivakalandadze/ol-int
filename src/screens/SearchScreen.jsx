import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Item = ({title}) => (
  <TextInput style={{height: 40, width: '100%'}} value={title} />
);

export default function SearchScreen({data}) {
  return (
    <View style={{padding: 20}}>
      <TextInput
        placeholder="Search"
        style={{height: 40, width: '100%', backgroundColor: 'white'}}
      />
      <View style={{height: 20}} />

      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
