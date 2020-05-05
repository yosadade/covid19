import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

class CardProvinsi extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    this.getDataProvinsi()
  }

  componentWillUnmount () {
    this.getDataProvinsi()
  }

  async getDataProvinsi () {
    await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then(res => res.json())
      .then(response => {
        this.setState({
          data: response.data.slice(0, 5)
        })
      })
  }

  render () {
    const { data } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={this.renderDataProvinsi}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }

  renderDataProvinsi = ({ item }) => {
    return (
      <View style={styles.content}>
        <Text style={styles.nameProvinsi}>
          {item.provinsi}
        </Text>
        <View style={styles.content__data}>
          <View style={styles['content__data--kasus']}>
            <Text style={styles['content__data__text']}>
              {item.kasusPosi}
            </Text>
          </View>
          <View style={styles['content__data--sembuh']}>
            <Text style={styles['content__data__text']}>
              {item.kasusSemb}
            </Text>
          </View>
          <View style={styles['content__data--meninggal']}>
            <Text style={styles['content__data__text']}>
              {item.kasusMeni}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default CardProvinsi

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7',
    alignItems: 'center'
  },
  nameProvinsi: {
    fontSize: 13
  },
  content__data: {
    flexDirection: 'row'
  },
  'content__data--kasus': {
    backgroundColor: '#FF8E35',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    width: 38
  },
  'content__data--sembuh': {
    backgroundColor: '#3598DC',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    width: 38
  },
  'content__data--meninggal': {
    backgroundColor: '#FF2D54',
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    width: 38
  },
  content__data__text: {
    color: '#FFFFFF',
    fontSize: 12
  }
})
