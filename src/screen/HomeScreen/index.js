import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView
} from 'react-native'

import MyStatusBar from '../../components/StatusBar'
import Navbar from '../../components/Navbar'

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
      ],
      dataNasional: [],
      dataProvinsi: []
    }
  }

  componentDidMount () {
    this.getDataIndo()
    this.getDataProvinsi()
  }

  async getDataIndo () {
    // eslint-disable-next-line no-undef
    await fetch('https://indonesia-covid-19.mathdro.id/api')
      .then(response => response.json())
      .then(res => {
        this.setState({
          dataNasional: res
        })
      })
  }

  async getDataProvinsi () {
    // eslint-disable-next-line no-undef
    await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then(res => res.json())
      .then(response => {
        this.setState({
          dataProvinsi: response.data.slice(0, 5)
        })
      })
  }

  render () {
    // const loading = this.state.data
    // if (loading.length === 0) {
    //   return <SplashScreen />
    // }
    return (
      <SafeAreaView style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderNavbar()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderBanner()}
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

  renderCardIndo = () => {
    return (
      <View>
        {this.renderLead()}
        {this.renderKasusMeninggal()}
        {this.renderPerawatanSembuh()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <View
        style={styles['lead']}
      >
        <Text style={styles['lead__title']}>Data Nasional </Text>
      </View>
    )
  }

  renderKasusMeninggal = () => {
    const { jumlahKasus, meninggal } = this.state.dataNasional
    return (
      <View style={styles.cardIndo}>
        <View style={styles.kasus}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name='mine' size={22} color='#FFFFFF'/>
            <Text style={styles.title}> KASUS </Text>
          </View>
          <View style={styles.dataNasional}>
            <Text style={styles.number}> {jumlahKasus} </Text>
          </View>
        </View>

        <View style={styles.meninggal}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name='grave-stone' size={20} color='#FFFFFF'/>
            <Text style={styles.title}> MENINGGAL </Text>
          </View>
          <Text style={styles.number}> {meninggal} </Text>
        </View>
      </View>
    )
  }

  renderPerawatanSembuh = () => {
    const { perawatan, sembuh } = this.state.dataNasional
    return (
      <View style={styles.cardIndo}>
        <View style={styles.perawatan}>
          <View style={styles.icon}>
            <FontAwesome name='hospital-o' size={18} color='#FFFFFF'/>
            <Text style={styles.title}> PERAWATAN </Text>
          </View>
          <Text style={styles.number}> {perawatan} </Text>
        </View>
        <View style={styles.sembuh}>
          <View style={styles.icon}>
            <Ionicons name='ios-body' size={20} color='#FFFFFF'/>
            <Text style={styles.title}> SEMBUH </Text>
          </View>
          <Text style={styles.number}> {sembuh} </Text>
        </View>
      </View>
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

  renderCardProvinsi = () => {
    return (
      <View style={styles['card-provinsi']}>
        {this.renderLeadProvinsi()}
        {this.renderContent()}
      </View>
    )
  }

  renderLeadProvinsi = () => {
    return (
      <View
        style={styles['lead']}
      >
        <Text style={styles['lead__title']}>Data Provinsi </Text>
      </View>
    )
  }

  renderContent = () => {
    const { dataProvinsi } = this.state
    return (
      <FlatList
        data={dataProvinsi}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderDataProvinsi}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderRadius: 10,
          backgroundColor: '#282B33',
          marginHorizontal: 20
        }}
      />
    )
  }

  renderDataProvinsi = ({ item }) => {
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

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24252B'
  },
  lead: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  lead__title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
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
  },
  cardIndo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  kasus: {
    height: 100,
    width: '48%',
    backgroundColor: '#FF8E35',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  meninggal: {
    height: 100,
    width: '48%',
    backgroundColor: '#FF2D54',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  perawatan: {
    height: 100,
    width: '48%',
    backgroundColor: '#01CD98',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sembuh: {
    height: 100,
    width: '48%',
    backgroundColor: '#3598DC',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginVertical: 5,
    marginHorizontal: 5
  },
  number: {
    fontSize: 35,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  'card-provinsi': {
    paddingBottom: 20
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
