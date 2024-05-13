import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import './src/config/Firebase';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;