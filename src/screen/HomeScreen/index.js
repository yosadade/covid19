import React, { Component } from 'react'
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  Image,
  View,
  ScrollView
} from 'react-native'

import MyStatusBar from '../../components/StatusBar'
import Navbar from '../../components/Navbar'
import CardIndo from '../../components/CardIndo'
import CardProvinsi from '../../components/CardProvinsi'

class HomeScreen extends Component {
  constructor () {
    super()
    this.state = {
      dataBanner: [
        {
          color: '#E86064'
        },
        {
          color: '#0A0D14'
        },
        {
          color: '#449B80'
        }
      ]
    }
  }

  render () {
    return (
      <SafeAreaView style={styles['container']}>
        <MyStatusBar />
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.select({
            ios: 0
          })}
          enabled
        />
        <Navbar title='Covid19' backgroundColor='#F7F7F7'/>
        <ScrollView>
          {this.renderBanner()}
          <CardIndo />
          <CardProvinsi />
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderBanner = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={this.state.dataBanner}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderContentBanner}
      />
    )
  }

  renderContentBanner = ({ item }) => {
    return (
      <View style={styles['banner__banner-area']}>
        <Image source={item.ilustrasi} style={styles['banner__banner-area__img']}/>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFFFFF'
  },
  'banner__banner-area': {
    flex: 1,
    height: 150,
    width: 350,
    backgroundColor: '#E86064',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5
  },
  'banner__banner-area__img': {
    height: 200,
    width: 200,
    backgroundColor: '#E86064'
  }
})
