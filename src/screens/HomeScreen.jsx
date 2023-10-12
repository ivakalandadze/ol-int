import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function HomeScreen({onPress}) {
  const [backgroundColor, setBackgroundColor] = useState('red');

  useEffect(() => {
    toggleColor();
  }, []);

  const toggleColor = () =>
    setBackgroundColor(backgroundColor === 'red' ? 'lime' : 'red');

  return (
    <View>
      <Button title="Fetch Data" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
