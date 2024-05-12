import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignUp,
  Cat2,
  Cat3,
} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cat2"
        component={Cat2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cat3"
        component={Cat3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
