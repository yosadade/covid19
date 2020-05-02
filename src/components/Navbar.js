import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
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
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}>
        Covid19
        </Text>
        <Text
          style={styles.dataUpdate}>
        Last Update {this.state.dataLastUpdate}
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
    backgroundColor: '#F7F7F7'
  },
  title: {
    color: '#0A0D19',
    fontSize: 18,
    fontWeight: 'bold'
  },
  dataUpdate: {
    color: '#0A0D19',
    fontSize: 12,
    fontWeight: '600'
  }
})
