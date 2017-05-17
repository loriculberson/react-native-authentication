import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Card, CardSelection, Input, Spinner } from '../common';


class Signin extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress(){
    const { email, password } = this.state;

    this.setState({ error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this))
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Nope! Try again.',
      loading: false
    })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button 
        text='Sign In'
        onPress={this.onButtonPress.bind(this)} 
      />

    );
  }

  render(){
    return(
      <Card>    

        <CardSelection>
          <Input 
            label="Email"
            placeholder="user@example.com"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
        </CardSelection>

        <CardSelection>
          <Input 
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry
          />
        </CardSelection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSelection>
          {this.renderButton()}
        </CardSelection>

      </Card>
    );

  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export { Signin };