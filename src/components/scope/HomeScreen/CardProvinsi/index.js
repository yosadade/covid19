import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native'

class CardProvinsi extends Component {
  constructor () {
    super()
    this.state = {
      dataProvinsi: [],
      isFetching: true
    }
  }

  componentDidMount () {
    this.getDataProvinsi()
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

  // onRefresh = () => {
  //   this.setState({ isFetching: true })
  //   setTimeout(() => {
  //     this.getDataProvinsi()
  //   }, 1000)
  // };

  render () {
    return (
      <SafeAreaView style={styles['card-provinsi']}>
        {this.renderLead()}
        {this.renderContent()}
      </SafeAreaView>
    )
  }

  renderLead = () => {
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
          renderItem={this.renderDataProvinsiItem}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={6}
          updateCellsBatchingPeriod={100}
          // refreshing={isFetching}
          // onRefresh={() => this.onRefresh()}
          contentContainerStyle={{
            borderRadius: 10,
            backgroundColor: '#282B33',
            marginHorizontal: 20
          }}
        />
      )
    }

    renderDataProvinsiItem = ({ item }) => {
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

export default CardProvinsi

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
