import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Collection from './Collections';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Collection"
      screenOptions={{
        headerShown: false,
        gestureEnabled,
      }}
    >
      <Stack.Screen name="Collection" component={Collection} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
