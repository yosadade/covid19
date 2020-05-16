import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'

const MyStatusBar = () => {
  return (
    <View style={styles['container']}>
      <StatusBar
        translucent
        backgroundColor='#282B33'
        barStyle='light-content'
      />
    </View>
  )
}

export default MyStatusBar

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  }
})
