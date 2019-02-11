import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { AdMobBanner } from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Баптау',
    headerTintColor: '#7BC6FF',
    headerStyle: {
      backgroundColor: '#FFF',
    },
  };

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.optionsTitleText}>
          Баптаулар
        </Text>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => this.props.navigation.navigate('AboutPage')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require('../assets/images/icon/info.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Біз туралы
                </Text>
              </View>
            </View>
          </Touchable>
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
    paddingTop: 6,
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
    zIndex: 1000, 
    position: 'absolute', 
    bottom: 0, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    alignSelf: 'center', 
    flex: 1 
  },
});
