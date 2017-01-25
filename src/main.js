import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import firebase from 'firebase';
import { Signin } from './components/authentication/Signin';

class Authentication extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTiHO9PMOwMuxF8J79ZFMPNY-TQlClUtQ',
      authDomain: 'authentication-app-73b02.firebaseapp.com',
      databaseURL: 'https://authentication-app-73b02.firebaseio.com',
      storageBucket: 'authentication-app-73b02.appspot.com',
      messagingSenderId: '638942030162'
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Signin/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});


export default Authentication;
// AppRegistry.registerComponent('authentication', () => Authentication);
// AppRegistry.registerComponent('MyAppName', () => MyRootComponent);