import React, { Component } from 'react'
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from 'react-native'

import MyStatusBar from '../../components/StatusBar'
import Navbar from '../../components/Navbar'

class HomeScreen extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar />
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.select({
            ios: 0
          })}
          enabled
        />
        <Navbar />
      </SafeAreaView>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#171b1e'
  }
})
