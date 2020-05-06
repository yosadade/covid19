import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
  Text,
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
          color: '#E86064',
          title: 'Cuci tangan dengan sabun \n cuci tangan minimal 3x sehari',
          icon: {
            name: 'house',
            size: 60
          }
        },
        {
          color: '#0A0D14',
          title: 'Gunakan masker',
          icon: {
            name: 'house',
            size: 60
          }
        },
        {
          color: '#449B80',
          title: 'Jaga kebersihan lingkungan',
          icon: {
            name: 'house',
            size: 60
          }
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
        <Navbar backgroundColor='#282B33'/>
        <ScrollView style={{ flex: 1 }}>
          {this.renderBanner()}
          <CardIndo />
          <CardProvinsi />
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderBanner = () => {
    const { dataBanner } = this.state
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataBanner}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderContentBanner}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    )
  }

  renderContentBanner = ({ item }) => {
    return (
      <View style={[styles['banner__banner-area'], { backgroundColor: item.color }]}>
        <Ionicons name={item.icon.name} size={item.icon.size} style={{ marginRight: 20 }}/>
        <Text style={styles['banner__banner-area__text']}> {item.title} </Text>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24252B'
  },
  'banner__banner-area': {
    height: 150,
    width: 350,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#E86064',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  'banner__banner-area__text': {
    color: '#FFFFFF'
  }
})
