import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { AdMobBanner } from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Біз туралы',
    headerTintColor: '#7BC6FF',
    headerStyle: {
      backgroundColor: '#FFF',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.optionsTitleText}>
          Бағдарлама авторы
        </Text>
      <View style={styles.text}>
        <Text style={styles.textMain}> 
          Бағдарлама авторы Бағлан Таңатаров.
        </Text>
        <Text style={styles.textMain}>
          Мұндағы барлық рецептер қол жетімді әрі тегін.
        </Text>
        <Text style={styles.textMain}>
          Алдыдағы уақытта бағдарламаның жаңартулары мен рецептердің жаңа түрлері шығатын болады.
        </Text>
        <Text style={styles.textMain}>
          Егерде сұрақтарыңыз бен ұсыныстарыңыз болса мына baglan060495@gmail.com почтаға жаза аласыздар.
        </Text>
        <Image source={require('../../assets/images/vialike.png')} 
          resizeMode="contain"
          fadeDuration={0}
          style={styles.icon}/>
        <Text style={styles.corp}>
          vialike.kz, 2019 жыл.
        </Text>
      </View>
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
  text: {
    marginLeft: 10,
    marginRight: 4,
  },
  textMain: {
    color: '#5E3B4F',
    fontSize: 16,
    paddingTop: 3,
  },
  icon: {
    width: 140,
    height: 90, 
    alignSelf:'center',
  },
  corp: {
    color: '#5E3B4F',
    fontSize: 15,
    paddingTop: 6,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  AdMob: {
    zIndex: 1000, 
    position: 'absolute', 
    bottom: 0, 
    backgroundColor: '#fff', 
    opacity: 0.1,
    alignItems: 'center', 
    alignSelf: 'center', 
    flex: 1 
  },
});
