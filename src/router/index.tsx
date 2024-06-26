import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  GetStarted,
  SignIn,
  SignUp,
  Homepage,
  Homepage2,
  Article,
  Profile,
  Dog1,
  Dog2,
  Dog3,
  Cat1,
  cat2,
  cat3,
  DataAdopter,
  Ulasan,
} from '../pages';

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
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homepage2"
        component={Homepage2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
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
      <Stack.Screen
        name="Dog3"
        component={Dog3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cat1"
        component={Cat1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cat2"
        component={cat2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cat3"
        component={cat3}
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
