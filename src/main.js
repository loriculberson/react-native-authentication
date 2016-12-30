'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text
} from 'react-native';

import SignIn from './components/authentication/signin';

class Authentication extends Component {
  render(){
    return (
      <View style={styles.container}>
        <SignIn/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


AppRegistry.registerComponent('authentication', () => Authentication);
// AppRegistry.registerComponent('MyAppName', () => MyRootComponent);