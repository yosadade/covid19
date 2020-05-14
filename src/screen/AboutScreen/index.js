import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StatusBar from '../../components/StatusBar'

class AboutScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderNavbar()}
        {this.renderTitle()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar />
    )
  }

  renderNavbar = () => {
    return (
      <View
        style={styles['navbar']}
      >
        <Ionicons
          name='md-settings'
          color='#FF2D54'
          size={20}
        />
        <Text style={styles['navbar__title']}> About </Text>
      </View>
    )
  }

  renderTitle = () => {
    return (
      <View style={styles['wrap__title']}>
        <Text style={styles['title']}> Halaman belum tersedia </Text>
      </View>
    )
  }
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24252B'
  },
  navbar: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#282B33',
    flexDirection: 'row',
    alignItems: 'center'
  },
  navbar__title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 5
  },
  wrap__title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CEC6C6'
  }
})
