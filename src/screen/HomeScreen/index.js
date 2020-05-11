import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  YellowBox
} from 'react-native'

import MyStatusBar from '../../components/StatusBar'
import Navbar from '../../components/Navbar'
import Hero from '../../components/scope/HomeScreen/Hero'
import CardIndo from '../../components/scope/HomeScreen/CardIndo'
import CardProvinsi from '../../components/scope/HomeScreen/CardProvinsi'

class HomeScreen extends Component {
  constructor () {
    super()
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  render () {
    return (
      <SafeAreaView style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderNavbar()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderHero()}
          {this.renderCardIndo()}
          {this.renderCardProvinsi()}
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderStatusBar = () => {
    return (
      <MyStatusBar />
    )
  }

  renderNavbar = () => {
    return (
      <Navbar backgroundColor='#282B33'/>
    )
  }

  renderHero = () => {
    return (
      <Hero />
    )
  }

  renderCardIndo = () => {
    return (
      <View>
        <CardIndo />
      </View>
    )
  }

  renderCardProvinsi = () => {
    return (
      <View>
        <CardProvinsi />
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24252B'
  }
})
