import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, ScrollView  } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { AdMobBanner } from 'expo';

const data = require('./files/data.json');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Рецепт',
    headerTintColor: '#7BC6FF',
    headerStyle: {
      backgroundColor: '#FFF',
    },
  };
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.optionsTitleText}>Тiзiмдер</Text>
        <FlatList
          data={data}
          renderItem={({item}) => 
          <Touchable
          onPress={() => this.props.navigation.navigate('ReseptPage', {id:item.id})}
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require('../assets/images/icon/cake.png')}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                {item.title}
                </Text>
              </View>
            </View>
          </Touchable>
            }
          keyExtractor={({id}, index) => id}
        />
        </ScrollView>
        <View style={styles.AdMob}> 
          <AdMobBanner
              bannerSize="smartBannerPortrait"
              adUnitID="ca-app-pub-3859504316235219/6520440427" // Test ID, Replace with your-admob-unit-id
              testDevices={[AdMobBanner.simulatorId]}
              testDeviceID="EMULATOR"
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
  optionsTitleText: {
    color: '#FE7559',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 8,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    color: '#7b7f9a',
    fontSize: 15,
    marginTop: 1,
  },
  AdMob: {
    opacity: 0.1,
    alignItems: 'center', 
    alignSelf: 'center', 
  },
});