import React from 'react'
import 'react-native-gesture-handler'

import HomeScreen from '../screen/HomeScreen'
import MapScreen from '../screen/MapScreen'
import CallCenterScreen from '../screen/CallCenterScreen'
import AboutScreen from '../screen/AboutScreen'
import SplashScreen from '../screen/SplashScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen
          name='MapScreen'
          component={MapScreen}
        />
        <Stack.Screen
          name='CallCenterScreen'
          component={CallCenterScreen}
        />
        <Stack.Screen
          name='AboutScreen'
          component={AboutScreen}
        />
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
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
        activeTintColor: '#FF2D54',
        style: {
          height: 60,
          backgroundColor: '#282B33'
        },
        labelStyle: {
          fontSize: 12,
          marginBottom: 10,
          fontWeight: 'bold'
        },
        tabStyle: {
          marginTop: 10
        },
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        tabBarIcon={{
          activeTintColor: '#FC7302'
        }}
        options={{

          activeTintColor: { activeTintColor: '#FC7302' },
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => {
            return (
              <Ionicons name='md-home' color='#FFFFFF' size={20}/>
            )
          }
        }}
      />
      <Tab.Screen
        name='Hospital'
        component={MapScreen}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name='hospital-marker' color='#FFFFFF' size={20}/>
            )
          }
        }}
      />
      <Tab.Screen
        name='Call Center'
        component={CallCenterScreen}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => {
            return (
              <Ionicons name='md-call' color='#FFFFFF' size={20}/>
            )
          }
        }}
      />
      <Tab.Screen
        name='About'
        component={AboutScreen}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => {
            return (
              <Ionicons name='md-settings' color='#FFFFFF' size={20}/>
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Navigation
