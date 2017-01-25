import React, { Component } from 'react';
// import { Text, TextInput } from 'react-native';

import { Button, Card, CardSelection, Input } from '../common';


// export default class SignIn extends Component {
class Signin extends Component {
  state = { email: '', password: '' };

  render(){
    return(
      <Card>
        <CardSelection>
          <Input 
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
        </CardSelection>

        <CardSelection>
          <Input 
            label="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
          />
        </CardSelection>

        <CardSelection>
          <Button 
            text='Sign In'
            onPress={this.onPress} 
          />
        </CardSelection>

      </Card>
    );

  }
  // onPress = () => {
  //   this.setState({
  //     username: '',
  //     password: ''
  //   });
  // };

  onPress () {
    const { email, password } = this.state;
  }
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },

//   input: {
//     padding: 4,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     margin: 5,
//     width: 200,
//     alignSelf: 'center'
//   },

//   label: {
//     fontSize: 18
//   }
// });

export { Signin };