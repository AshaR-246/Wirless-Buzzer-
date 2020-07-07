import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class App extends Component {
  displayAlert(){
    alert('alert')
  }
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Button title="Alert" color="red" onPress={this.displayAlert}/>
        <Text>My First React component</Text>
      </View>
    );
  }
}
