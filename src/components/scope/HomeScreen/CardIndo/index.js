import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class CardIndo extends Component {
  constructor () {
    super()
    this.state = {
      dataNasional: []
    }
  }

  componentDidMount () {
    this.getDataIndo()
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

  render () {
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
}

export default CardIndo

const styles = StyleSheet.create({
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
  }
})
