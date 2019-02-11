import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReseptScreen from '../screens/pages/ReseptScreen';
import AboutScreen from '../screens/pages/AboutScreen';

const HomeStack = createStackNavigator({
  'Home': { screen: HomeScreen },
  ReseptPage: { screen: ReseptScreen },
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const SettingsStack = createStackNavigator({
  'Settings': { screen: SettingsScreen },
  AboutPage: { screen: AboutScreen },
});

SettingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export default createBottomTabNavigator(
  {
    'Рецепт': { screen: HomeStack },
    'Баптау': { screen: SettingsStack },
  },
  {
   navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Рецепт') {
          iconName = `md-list-box`;
        }
        else if (routeName === 'Баптау') {
          iconName = `md-settings`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
      tabBarOptions: {
        activeTintColor: '#FE7559',
        inactiveTintColor: '#7BC6FF',
        style: {
          backgroundColor: '#FFF',
        },
    },
  }
);
