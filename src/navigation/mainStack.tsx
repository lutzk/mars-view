import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#c2b09b',
      },
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export { MainStack };
