import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Linking,
  FlatList,
  Platform,
  TouchableOpacity
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import StatusBar from '../../components/StatusBar'

class MapScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      isFetching: true
    }
  }

  componentDidMount () {
    this.getHospital()
  }

  async getHospital () {
    // eslint-disable-next-line no-undef
    await fetch('https://covid19-public.digitalservice.id/api/v1/sebaran/jabar/faskes')
      .then(res => res.json())
      .then(response =>
        this.setState({ data: response.data, isFetching: false })
      )
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderNavbar()}
        {this.renderLead()}
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
        <MaterialCommunityIcons
          name='hospital-marker'
          color='#FF2D54'
          size={20}
        />
        <Text style={styles['navbar__title']}> Rumah Sakit Terdekat </Text>
      </View>
    )
  }

  renderLead = () => {
    return (
      <View
        style={styles['lead']}
      >
        <Text style={styles['lead__title']}>Tekan alamat rumah sakit untuk menunjukan route terbaik.</Text>
      </View>
    )
  }

  renderContent = () => {
    const { data } = this.state
    return (
      <SafeAreaView style={styles['content']}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index.toString()}
          showsVerticalScrollIndicator={false}
          scrollIndicatorInsets={false}
          maxToRenderPerBatch={6}
          renderItem={this.renderContentItem}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 20
          }}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
        />
      </SafeAreaView>
    )
  }

  renderContentItem = ({ item }) => {
    return (
      <View style={{ paddingVertical: 5 }}>
        <TouchableOpacity
          onPress={() => this.openMaps(item.latitude, item.longitude)}>
          <View style={styles.card} key={item.id}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#343641',
                borderRadius: 10,
                padding: 10,
                marginVertical: 5,
                alignItems: 'center'
              }}>
              <View>
                <Text style={styles['content__title']}>{item.nama}</Text>
                <Text style={styles['content__number']}>{item.alamat}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  onRefresh = () => {
    this.setState({ isFetching: true })
    setTimeout(() => {
      this.getHospital()
    }, 1000)
  }

  openMaps = (lat, lng) => {
    const location = `${lat}+${lng}`
    const url = Platform.select({
      ios: `maps://app?daddr=${location}`,
      android: `google.navigation:q=${location}`
    })
    Linking.openURL(url)
  }
}

export default MapScreen

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
  lead: {
    backgroundColor: '#048AD6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  lead__title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  content: {
    backgroundColor: '#24252B',
    paddingHorizontal: 20
  },
  content__title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  content__number: {
    color: '#FF2D54',
    paddingVertical: 5,
    fontSize: 13
  }
})
