import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, NewPage, GetStarted, Article, DataAdopter, Ulasan} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPage"
        component={NewPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DataAdopter"
        component={DataAdopter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ulasan"
        component={Ulasan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
