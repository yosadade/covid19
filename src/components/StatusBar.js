import React from 'react'
import { StyleSheet, StatusBar, View, Platform } from 'react-native'

const MyStatusBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor='#282B33'
        barStyle='light-content'
      />
    </View>
  )
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 0 : 56

export default MyStatusBar

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT
  }
})
