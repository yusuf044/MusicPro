import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainStack from './src/navigation/MainStack';
import MainTabs from './src/navigation/MainTabs';
const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
