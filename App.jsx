/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyTabs from './src/navigation/TabNavigator';
// import {Context} from './src/context/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import ContextProvider from './src/context/ContextProvider';

// 1. ნავიგაციისა და კონტექსტის ინსტალაცია
// 2. მოაწყე ორი სქრინი ბოთომ ტაბსში: ჰოუმი და სერჩი
// 3. ჰოუმზე გამოიძახე აპი სტანდარტული ბათონით და მიიღე დატა, შეინახე კონტექსტ აპიში გლობალურად, და ყოველ ჯერზე როცა ჰოუმზე გადახვალ შეცვალე ბექგრაუნდის ფერი
// 4. სერჩის გვერდზე დაარენდერე კონტექსტში შენახული დატა, თვითონ სერჩისთვის გამოიყენე დებაუნს მეთოდი რაც იქნება პლიუსი თუმცა არჩევანი შენზეა, გაიფილტრე 'title'-თ  და დაარენდერე გაფილტრული აითემები. სერჩის თითოეული აითემის თაითლზე დაჭერით ამოდიოდეს კლავიატურა და უნდა შეიძლებოდეს ამ თაითლის შეცვლა ან ძველზე დაბრუნება(reset button).
// 5. დებაუნსის ცოდნა და ხელით დაწერა არის პლიუსი

//API URL : https://jsonplaceholder.typicode.com/posts

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <ContextProvider>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <MyTabs />
        </SafeAreaView>
      </ContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
