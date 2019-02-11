import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { AdMobBanner } from 'expo';
import Images from '../files/images.js';
const data = require('../files/data.json');
export default class ReseptScreen extends React.Component {
  static navigationOptions = (props) => {
    const { navigation } = props;
    const Id = navigation.getParam('id', 'NO-ID');
    
    return {
      title: data[Id].title,
      headerTintColor: '#7BC6FF',
      headerStyle: {
        backgroundColor: '#FFF',
      },
  }};

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', 'NO-ID');
    return (
      <View style={styles.container}>
        <ScrollView >
          <Text style={styles.title}>
            {data[itemId].titlePage}
          </Text>
          <Image source={Images[data[itemId].id]} 
          resizeMode="contain"
          fadeDuration={0}
          style={styles.image}/>
          <Text style={styles.text}>
            {data[itemId].text}
          </Text>
        </ScrollView>
        <View style={styles.AdMob}> 
          <AdMobBanner
              bannerSize="smartBannerPortrait"
              adUnitID="ca-app-pub-3859504316235219/6520440427" // Test ID, Replace with your-admob-unit-id
              onDidFailToReceiveAdWithError={this.bannerError} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#FE7559',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 8,
  },
  text: {
    padding: 10,
    fontSize: 15,
    paddingBottom: 50,
    color: '#5E3B4F',
  },
  image: {
    alignSelf:'center',
    width: 220, 
    height: 150, 
  },
  AdMob: {
    zIndex: 1000, 
    position: 'absolute', 
    bottom: 0, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    alignSelf: 'center', 
    flex: 1 
  },
});
