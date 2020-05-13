import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import Svg from 'react-native-svg'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import handWash from '../../../../assets/img/01.svg'
import masker from '../../../../assets/img/02.svg'
import handsanitizer from '../../../../assets/img/03.svg'
import quarantine from '../../../../assets/img/04.svg'
import handShake from '../../../../assets/img/05.svg'

class Caraousel extends Component {
  constructor () {
    super()
    this.state = {
      dataHero: [
        {
          backgroundColor: '#F7F7F7',
          title: 'Cuci tangan\nsampai bersih',
          img: handWash
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Gunakan masker\nwajah medis',
          img: masker
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Gunakan gel\nberbasis alkohol',
          img: handsanitizer
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Karantina mandiri\nselama 14 hari',
          img: quarantine
        },
        {
          backgroundColor: '#F7F7F7',
          title: 'Hindari Kontak\nFisik',
          img: handShake
        }
      ],
      activeSlide: 0
    }
  }

  render () {
    return (
      <View style={styles['hero']}>
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
      <View
        style={[
          styles['hero__caraousel'],
          { backgroundColor: item.backgroundColor }
        ]}>
        <Svg height='100' width='100' fill='blue'>
          <item.img
            style={styles['hero__caraousel__img']} />
        </Svg>
        <Text
          style={styles['hero__caraousel__title']}>
          {item.title}
        </Text>
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
}

export default Caraousel

const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: 20,
    paddingTop: 40
  },
  hero__caraousel: {
    borderRadius: 10,
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  hero__caraousel__img: {
    height: 100,
    width: 100
  },
  hero__caraousel__title: {
    color: '#222222',
    fontSize: 18,
    fontWeight: 'bold'
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
