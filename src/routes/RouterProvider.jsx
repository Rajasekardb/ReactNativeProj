import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {routesArray} from './routes-data';

const Stack = createNativeStackNavigator();

function RouterProvider() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routesArray.map(route => (
          <Stack.Screen key={route.id} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouterProvider;
