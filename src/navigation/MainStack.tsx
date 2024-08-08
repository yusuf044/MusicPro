import React from 'react';

import {StackScreenWithSearchBar} from '../constants/layout';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Songs"
        options={{
          ...StackScreenWithSearchBar,
          headerTitle: 'Songs',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
