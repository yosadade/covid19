import React, { Component } from 'react'
import 'react-native-gesture-handler'

import HomeScreen from '../screen/HomeScreen'
import AboutScreen from '../screen/AboutScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Home = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}

const About = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen
        name='AboutScreen'
        component={AboutScreen}
      />
    </Stack.Navigator>
  )
}

export default class Navigation extends Component {
  render () {
    const Tab = createBottomTabNavigator()
    return (
      <NavigationContainer>
        {/* <Stack.Navigator
          initialRouteName='HomeScreen'
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS
          }}>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
          />
          <Stack.Screen
            name='AboutScreen'
            component={AboutScreen}
          />
        </Stack.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home} />
          <Tab.Screen
            name="About"
            component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
