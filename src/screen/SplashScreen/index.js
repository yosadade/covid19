import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { DotIndicator } from 'react-native-indicators'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MyStatusBar from '../../components/StatusBar'

const SplashScreen = () => {
  return (
    <View style={styles['container']}>
      <MyStatusBar />
      <Splash />
    </View>
  )
}

const Splash = () => {
  return (
    <View style={styles['splash']}>
      <View style={styles['splash__lead']}>
        <MaterialCommunityIcons
          name='mine'
          size={40}
          color='#FF2D54'
          style={styles['splash__lead__icon']}
        />
        <Text style={styles['splash__lead__title']}>
            COVID19
        </Text>
      </View>
      <DotIndicator
        style={styles['splash__indicator']}
        color='#FFFFFF'
        size={7}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24252B'
  },
  splash__lead: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  splash__lead__icon: {
    top: 320
  },
  splash__lead__title: {
    color: '#FFFFFF',
    fontSize: 45,
    fontWeight: 'bold',
    top: 320,
    marginLeft: 5
  }
})
