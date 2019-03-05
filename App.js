import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image, SafeAreaView,
  Dimensions
}
  from "react-native";
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'

import { Container, Content, Icon, Header, Body, Drawer } from 'native-base'

import { createDrawerNavigator, DrawerItems } from 'react-navigation'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        isReady: false
    };
}

async componentWillMount() {
  await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  });
  this.setState({ isReady: true });
}

 
  render() { 
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
  }
    return (
     
      <AppDrawerNavigator />
     
    )
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ marginTop: Expo.Constants.statusBarHeight,flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/up.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />


    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
 },
 {
   contentComponent: CustomDrawerComponent

 })

const styles = StyleSheet.create({

  container: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },


})