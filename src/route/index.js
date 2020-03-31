import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Adddata from '../component/screen/Adddata';
import Showdata from '../component/screen/Showdata';
import Editdata from '../component/screen/Editdata';

const stack = createStackNavigator({
  Showdata: {
    screen: Showdata,
  },

  Adddata: {
    screen: Adddata,
  },

  Editdata: {
    screen: Editdata,
  },
});

const HomeStack = createAppContainer(stack);
export default HomeStack;

/****
 *
 *
 *
 */

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
