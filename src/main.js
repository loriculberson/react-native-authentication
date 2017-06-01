import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSelection, Spinner } from './components/common';
import { Signin } from './components/authentication/signin';


class Authentication extends Component {
  state = { loggedIn: null };

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

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSelection>
            <Button 
              text='Sign Out!!!'
              onPress={() => firebase.auth().signOut()}
            />
          </CardSelection>
        );

      case false:
        return  <Signin/>;

      default:
        return <Spinner size="large" />;

    }
  }

  render(){
    return(
      this.renderContent()
    );
  }
};


export default Authentication;
// AppRegistry.registerComponent('authentication', () => Authentication);
// AppRegistry.registerComponent('MyAppName', () => MyRootComponent);