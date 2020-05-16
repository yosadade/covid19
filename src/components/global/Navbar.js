import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Axios from 'axios'
import Moment from 'moment'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataLastUpdate: []
    }
  }

  componentDidMount () {
    this.getDataLastUpdate()
  }

  getDataLastUpdate = () => {
    Axios.get('https://covid19.mathdro.id/api')
      .then(result => {
        console.log(Moment(result.lastUpdate).format('L HH:MM'))
        this.setState({
          dataLastUpdate: Moment(result.lastUpdate).format('L HH:MM')
        })
      })
  }

  render () {
    const { dataLastUpdate } = this.state
    return (
      <View style={styles['container']}>
        <View style={styles['wrap__logo']}>
          <MaterialCommunityIcons name='mine' size={20} color='#FF2D54' />
          <Text
            style={styles['logo__title']}>
          COVID19
          </Text>
        </View>
        <Text
          style={styles['data-update']}>
          Last Update {dataLastUpdate}
        </Text>
      </View>
    )
  }
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#282B33'
  },
  wrap__logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo__title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  'data-update': {
    color: '#cec6c6',
    fontSize: 11,
    fontWeight: '600'
  }
})
