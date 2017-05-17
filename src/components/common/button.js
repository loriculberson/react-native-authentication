import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight} from 'react-native';

class Button extends Component {
 // const Button = (props) => {
// const Button = ({onPress, props}) => {
   render(){
 
    return(
      <TouchableHighlight style={styles.button}
        underlayColor={'gray'}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
   }
};

const styles = StyleSheet.create({
  button: {
    // justifyContent: 'center',
    // alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: '#1874cd',
    marginTop: 10,
    backgroundColor: "#1874cd",
    flex: 1
  },
  buttonText: {
    // flex: 1,
    alignSelf: 'center',
    fontSize: 20,
    color: "white"
  }
});

export { Button };