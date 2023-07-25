// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import Wallet from './src/Wallet';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#202020',
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline'; // You can choose different icons for focused and non-focused states
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet-outline' : 'wallet-outline';
          }

          // You can return any icon component here. In this example, we're using AntDesign icons.
          return <Icon name={iconName} type='ionicon' size={22} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#11d9b2', // Color of the active tab label and icon
        inactiveTintColor: 'gray', // Color of the inactive tab label and icon
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
    </Tab.Navigator>
  );
};
