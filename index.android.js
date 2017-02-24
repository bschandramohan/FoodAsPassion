/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FoodAsPassion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Divya Welcomes All to "Food As Passion" App!
        </Text>
        <Text style={styles.instructions}>
          Menus
        </Text>
        <Text style={styles.instructions}>
          1. Item 1
          2. Item 2
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FoodAsPassion', () => FoodAsPassion);
