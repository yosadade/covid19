import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  YellowBox
} from 'react-native'

import MyStatusBar from '../../components/StatusBar'
import Navbar from '../../components/Navbar'

import handWash from '../../assets/img/01.png'
import masker from '../../assets/img/02.png'
import handsanitizer from '../../assets/img/03.png'
import quarantine from '../../assets/img/04.png'
import handShake from '../../assets/img/05.png'

class HomeScreen extends Component {
  constructor () {
    super()
    this.state = {
      dataHero: [
        {
          backgroundColor: '#F7F7F7',
          title: 'Cuci tangan \n sampai bersih',
          img: handWash
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Gunakan masker \n wajah medis',
          img: masker
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Gunakan gel \n berbasis alkohol',
          img: handsanitizer
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Karantina mandiri \n selama 14 hari',
          img: quarantine
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Hindari Kontak \n Fisik',
          img: handShake
        }
      ],
      activeSlide: 0,
      dataNasional: [],
      dataProvinsi: []
    }
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
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
          {/* {this.renderBanner()} */}
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
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {this.renderCaraousel()}
        {this.renderCaraouselPagination()}
      </View>
    )
  }

  renderCaraousel = () => {
    const { dataHero } = this.state
    const { width } = Dimensions.get('window')
    return (
      <Carousel
        data={dataHero}
        renderItem={this.renderCarouselItem}
        decelerationRate="fast"
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => this.setState({ activeSlide: index })}
      />
    )
  }

  renderCarouselItem = ({ item }) => {
    return (
      <View style={[styles['hero__caraousel'], { backgroundColor: item.backgroundColor }]}>
        <Image source={item.img} style={{ height: 100, width: 100 }} />
        <Text style={{ color: '#222222', fontSize: 18, fontWeight: 'bold' }}> {item.title} </Text>
      </View>
    )
  }

  renderCaraouselPagination = () => {
    const { dataHero, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={dataHero.length}
        activeDotIndex={activeSlide}
        dotStyle={styles['hero__pagination__dot']}
        dotContainerStyle={styles['hero__pagination__dot__container']}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        containerStyle={styles['hero__pagination__container']}
      />
    )
  }

  renderCardIndo = () => {
    return (
      <View style={{ paddingBottom: 10 }}>
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
      <View style={[styles['card-Indo']]}>
        <View style={[styles['card-Indo__data'], { backgroundColor: '#FF8E35' }]}>
          <View style={styles['card-Indo__data__icon']}>
            <MaterialCommunityIcons name='mine' size={22} color='#FFFFFF'/>
            <Text style={styles['card-Indo__data--title']}> KASUS </Text>
          </View>
          <Text style={styles['card-Indo__data--number']}> {jumlahKasus} </Text>
        </View>

        <View style={[styles['card-Indo__data'], { backgroundColor: '#FF2D54' }]}>
          <View style={styles['card-Indo__data__icon']}>
            <MaterialCommunityIcons name='grave-stone' size={20} color='#FFFFFF'/>
            <Text style={styles['card-Indo__data--title']}> MENINGGAL </Text>
          </View>
          <Text style={styles['card-Indo__data--number']}> {meninggal} </Text>
        </View>
      </View>
    )
  }

  renderPerawatanSembuh = () => {
    const { perawatan, sembuh } = this.state.dataNasional
    return (
      <View style={styles['card-Indo']}>
        <View style={[styles['card-Indo__data'], { backgroundColor: '#01CD98' }]}>
          <View style={styles['card-Indo__data__icon']}>
            <FontAwesome name='hospital-o' size={18} color='#FFFFFF'/>
            <Text style={styles['card-Indo__data--title']}> PERAWATAN </Text>
          </View>
          <Text style={styles['card-Indo__data--number']}> {perawatan} </Text>
        </View>
        <View style={[styles['card-Indo__data'], { backgroundColor: '#3598DC' }]}>
          <View style={styles['card-Indo__data__icon']}>
            <Ionicons name='ios-body' size={20} color='#FFFFFF'/>
            <Text style={styles['card-Indo__data--title']}> SEMBUH </Text>
          </View>
          <Text style={styles['card-Indo__data--number']}> {sembuh} </Text>
        </View>
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
  'card-Indo': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  'card-Indo__data': {
    height: 100,
    width: '48%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  'card-Indo__data__icon': {
    flexDirection: 'row',
    alignItems: 'center'
  },
  'card-Indo__data--title': {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginVertical: 5,
    marginHorizontal: 5
  },
  'card-Indo__data--number': {
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
  },
  hero__container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 150,
    left: 0
  },
  hero__wrapper: {
    width: 300,
    height: 200,
    backgroundColor: '#FFFFFF'
  },
  hero: {
    fontSize: 31,
    color: '#ffffff',
    fontFamily: 'Nunito-Bold'
  },
  hero__caraousel: {
    borderRadius: 10,
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  hero__pagination__dot__container: {
    marginHorizontal: 2,
    right: 20
  },
  hero__pagination__dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  hero__pagination__container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    bottom: 10
  }
})
