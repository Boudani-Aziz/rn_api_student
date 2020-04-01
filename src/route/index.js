import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Adddatacls from '../component/screen/Adddata';
import Showdatacls from '../component/screen/Showdata';
import Editdatacls from '../component/screen/Editdata';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Showdata" component={Showdatacls} />
      <Stack.Screen name="Editdata" component={Editdatacls} />
      <Stack.Screen name="Adddata" component={Adddatacls} />
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
