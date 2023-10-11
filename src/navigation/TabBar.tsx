import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TabBar = () => {
  const navigation = useNavigation();

  const navToHomeScreen = () => navigation.navigate('HomeScreen');
  const navToSearchScreen = () => navigation.navigate('SearchScreen');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navToHomeScreen}>
        <Text>HomeScreeen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navToSearchScreen}>
        <Text>SearchScreeen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    hegiht: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    alignItems: 'center',
    width: '40%',
  },
});
