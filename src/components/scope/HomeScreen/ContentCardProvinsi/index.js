import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import StatusBar from '../../../global/StatusBar'

class ContentCardProvinsi extends Component {
  constructor () {
    super()
    this.state = {
      dataProvinsi: []
    }
  }

  componentDidMount () {
    this.getDataProvinsi()
  }

  async getDataProvinsi () {
    // eslint-disable-next-line no-undef
    await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then(res => res.json())
      .then(response => {
        this.setState({
          dataProvinsi: response.data
        })
      })
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderNavbar()}
        {this.renderContent()}
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
        <TouchableOpacity
          style={{ marginRight: 5 }}
          onPress={this.onBack}
        >
          <MaterialCommunityIcons
            name='arrow-left'
            color='#FF2D54'
            size={20}
          />
        </TouchableOpacity>
        <Text style={styles['navbar__title']}>
            Data Provinsi
        </Text>
      </View>
    )
  }

  onBack = () => {
    this.props.navigation.goBack()
  }

  renderContent = () => {
    const { dataProvinsi } = this.state
    return (
      <FlatList
        data={dataProvinsi}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderDataProvinsiItem}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={6}
        updateCellsBatchingPeriod={100}
        // refreshing={isFetching}
        // onRefresh={() => this.onRefresh()}
        contentContainerStyle={{
          borderRadius: 10,
          backgroundColor: '#282B33',
          marginHorizontal: 20,
          marginVertical: 20
        }}
        style={{ backgroundColor: '#24252B' }}
      />
    )
  }

  renderDataProvinsiItem = ({ item }) => {
    return (
      <View style={styles['content']}>
        <Text style={styles['name-Provinsi']}>
          {item.provinsi}
        </Text>
        <View style={styles['content__data']}>
          <View style={styles['content__data--kasus']}>
            <Text style={styles['content__data__text--kasus']}>
              {item.kasusPosi}
            </Text>
          </View>
          <View style={styles['content__data--sembuh']}>
            <Text style={styles['content__data__text--sembuh']}>
              {item.kasusSemb}
            </Text>
          </View>
          <View style={styles['content__data--meninggal']}>
            <Text style={styles['content__data__text--meninggal']}>
              {item.kasusMeni}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

ContentCardProvinsi.propTypes = {
  navigation: PropTypes.object
}

export default ContentCardProvinsi

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24252B',
    flex: 1
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
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  'name-Provinsi': {
    fontSize: 13,
    color: '#FFFFFF'
  },
  content__data: {
    flexDirection: 'row'
  },
  'content__data--kasus': {
    backgroundColor: '#343641',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 38,
    borderRadius: 10
  },
  'content__data--sembuh': {
    backgroundColor: '#343641',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 38,
    borderRadius: 10
  },
  'content__data--meninggal': {
    backgroundColor: '#343641',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 38,
    borderRadius: 10
  },
  'content__data__text--kasus': {
    color: '#FF8E35',
    fontSize: 11
  },
  'content__data__text--sembuh': {
    color: '#3598DC',
    fontSize: 11
  },
  'content__data__text--meninggal': {
    color: '#FF2D54',
    fontSize: 11
  }
})
