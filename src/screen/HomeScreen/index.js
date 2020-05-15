import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
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
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`', 'VirtualizedLists should never be'])
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderNavbar()}
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {this.renderHero()}
          {this.renderCardIndo()}
          {this.renderCardProvinsi()}
        </ScrollView>
      </View>
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
        <CardProvinsi navigation={this.props.navigation}/>
      </View>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24252B'
  }
})
