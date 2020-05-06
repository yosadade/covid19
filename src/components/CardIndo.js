import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Navbar from '../components/Navbar'

class CardIndo extends Component {
  constructor () {
    super()
    this.state = {
      data: []
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
          data: res
        })
      })
  }

  render () {
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
    const { jumlahKasus, meninggal } = this.state.data
    return (
      <View style={styles.cardIndo}>
        <View style={styles.kasus}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name='mine' size={22} color='#FFFFFF'/>
            <Text style={styles.title}> KASUS </Text>
          </View>
          <View style={styles.data}>
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
    const { perawatan, sembuh } = this.state.data
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
  }
})
