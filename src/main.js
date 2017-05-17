import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import { Button } from './components/common';
import { Signin } from './components/authentication/signin';


class Authentication extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTiHO9PMOwMuxF8J79ZFMPNY-TQlClUtQ',
      authDomain: 'authentication-app-73b02.firebaseapp.com',
      databaseURL: 'https://authentication-app-73b02.firebaseio.com',
      storageBucket: 'authentication-app-73b02.appspot.com',
      messagingSenderId: '638942030162'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderButton() {
    if (this.state.loggedIn) {
      // return <Spinner size="small" />;
      return (
        <Button 
          text='Sign Out'
          // onPress={this.onButtonPress.bind(this)} 
        />
      );
    }

    return (
      <Button 
        text='Sign In'
        // onPress={this.onButtonPress.bind(this)} 
      />

    );
  }

  renderProperButton() {
    if (this.state.loggedIn) {
      return (
        <Button 
          text='Sign Out'
        />
      );
    }

    return  <Signin/>;
  }

  render(){
    return (
      {this.renderButton()}
    );
  }
};



export default Authentication;
// AppRegistry.registerComponent('authentication', () => Authentication);
// AppRegistry.registerComponent('MyAppName', () => MyRootComponent);