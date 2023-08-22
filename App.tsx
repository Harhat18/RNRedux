import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import First from './src/pages/First';
import Second from './src/pages/Second';

import UserProvider from './src/context/Provider';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Profile">
          <Tab.Screen
            name="FirstScreen"
            component={First}
            options={{tabBarBadge: 3}}
          />
          <Tab.Screen name="SecondScreen" component={Second} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
