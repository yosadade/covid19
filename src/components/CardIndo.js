import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
    const { jumlahKasus, meninggal, perawatan, sembuh } = this.state.data
    return (
      <View>
        <View style={styles.cardIndo}>
          <View style={styles.kasus}>
            <View style={styles.icon}>
              <MaterialCommunityIcons name='mine' size={22} color='#FFFFFF'/>
              <Text style={styles.title}> KASUS </Text>
            </View>
            <Text style={styles.number}> {jumlahKasus} </Text>
          </View>
          <View style={styles.meninggal}>
            <View style={styles.icon}>
              <MaterialCommunityIcons name='grave-stone' size={22} color='#FFFFFF'/>
              <Text style={styles.title}> MENINGGAL </Text>
            </View>
            <Text style={styles.number}> {meninggal} </Text>
          </View>
        </View>
        <View />
        <View style={styles.cardIndo}>
          <View style={styles.perawatan}>
            <View style={styles.icon}>
              <FontAwesome name='home' size={22} color='#FFFFFF'/>
              <Text style={styles.title}> PERAWATAN </Text>
            </View>
            <Text style={styles.number}> {perawatan} </Text>
          </View>
          <View style={styles.sembuh}>
            <View style={styles.icon}>
              <FontAwesome name='child' size={22} color='#FFFFFF'/>
              <Text style={styles.title}> SEMBUH </Text>
            </View>
            <Text style={styles.number}> {sembuh} </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default CardIndo

const styles = StyleSheet.create({
  cardIndo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20
  },
  kasus: {
    height: 109,
    width: '49%',
    backgroundColor: '#FF8E35',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  meninggal: {
    height: 109,
    width: '49%',
    backgroundColor: '#FF2D54',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  perawatan: {
    height: 109,
    width: '49%',
    backgroundColor: '#01CD98',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sembuh: {
    height: 109,
    width: '49%',
    backgroundColor: '#3598DC',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    flexDirection: 'row'
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
