import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Platform,
  Image
} from 'react-native'
import jateng from '../../assets/img/jawa-tengah.png.jpeg'
import StatusBar from '../../components/StatusBar'

class CallCenter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          nama: 'Kementrian Kesehatan',
          no: '021-5210-411',
          icon: jateng
        },
        {
          id: 2,
          nama: 'Kementrian Kesehatan',
          no: '0812-1212-3119',
          icon: jateng
        },
        {
          id: 3,
          nama: 'Pemprov DKI Jakarta',
          no: '112',
          icon: jateng
        },
        {
          id: 4,
          nama: 'Pemprov DKI Jakarta',
          no: '0813-8837-6955',
          icon: jateng
        },
        {
          id: 5,
          nama: 'Pemprov Jawa Tengah',
          no: '024-358-0713',
          icon: jateng
        },
        {
          id: 6,
          nama: 'Pemprov Jawa Tengah',
          no: '0823-1360-0560',
          icon: jateng
        },
        {
          id: 7,
          nama: 'Pemprov Jawa Timur',
          no: '031-843-0313',
          icon: jateng
        },
        {
          id: 8,
          nama: 'Pemprov Jawa Barat',
          no: '119',
          icon: jateng
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderLead()}
        {this.renderContent()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar />
    )
  }

  renderLead = () => {
    return (
      <View
        style={styles['lead']}
      >
        <Text style={styles['lead__title']}> Call Center </Text>
      </View>
    )
  }

  renderContent = () => {
    const { data } = this.state
    return (
      <View style={styles['content']}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index.toString()}
          contentContainerStyle={{ paddingVertical: 10 }}
          scrollEnabled={false}
          renderItem={this.renderContentItem}
        />
      </View>
    )
  }

  renderContentItem ({ item }) {
    return (
      <View style={{ paddingVertical: 5 }}>
        <TouchableOpacity
          onPress={() =>
            Platform.OS === 'ios'
              ? Linking.openURL(`tel:${item.no}`)
              : Linking.openURL(`tel:${item.no}`)
          }>
          <View style={styles.card} key={item.id}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#343641',
                borderRadius: 10,
                padding: 10,
                marginVertical: 5,
                alignItems: 'center'
              }}>
              <Image source={item.icon} style={styles['content__icon']}/>
              <View>
                <Text style={styles['content__title']}>{item.nama}</Text>
                <Text style={styles['content__number']}>{item.no}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

export default CallCenter

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lead: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#282B33'
  },
  lead__title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  content: {
    flex: 1,
    backgroundColor: '#24252B',
    paddingHorizontal: 20
  },
  content__icon: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 15
  },
  content__title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white'
  },
  content__number: {
    color: '#FF9F1C',
    paddingVertical: 5
  }
  // card: {
  //   backgroundColor: '#343641',
  //   borderRadius: 10,
  //   padding: 10,
  //   flexDirection: 'row',
  //   marginBottom: 8
  // }
})
