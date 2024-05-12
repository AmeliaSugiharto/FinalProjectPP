import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, HomePage2, Dog1, Dog2} from '../pages';

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
        name="HomePage2"
        component={HomePage2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dog1"
        component={Dog1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dog2"
        component={Dog2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
