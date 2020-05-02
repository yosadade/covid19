import React from 'react'
import 'react-native-gesture-handler'

import HomeScreen from '../screen/HomeScreen'
import AboutScreen from '../screen/AboutScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTab'
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen
          name='AboutScreen'
          component={AboutScreen}
        />
        <Stack.Screen
          name='HomeTab'
          component={HomeTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const allTab = [
//   {
//     name: 'HomeScreen',
//     component: { HomeScreen },
//     label: 'Home',
//     icon: null
//   },
//   {
//     name: 'AboutScreen',
//     component: { AboutScreen },
//     label: 'About',
//     icon: null
//   }
// ]

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF9F1C',
        style: {
          height: 70
        },
        labelStyle: {
          fontFamily: 'Nunito-SemiBold',
          fontSize: 12,
          marginBottom: 10
        },
        tabStyle: {
          marginTop: 10
        },
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen} />
      <Tab.Screen
        name='About'
        component={AboutScreen} />
    </Tab.Navigator>
  )
}

export default Navigation
