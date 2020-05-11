import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import handWash from '../../../../assets/img/01.png'
import masker from '../../../../assets/img/02.png'
import handsanitizer from '../../../../assets/img/03.png'
import quarantine from '../../../../assets/img/04.png'
import handShake from '../../../../assets/img/05.png'

class Caraousel extends Component {
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
        <Image
          source={item.img}
          style={styles['hero__caraousel__img']} />
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
