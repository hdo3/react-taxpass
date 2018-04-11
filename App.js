import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Regform from './app/Component/Regform';
import { StackNavigator } from 'react-navigation';
import Login from './app/Component/Login';

const Applicaiton = StackNavigator({
  Home: { screen: Login },
  }, {
    navigationOptions: {
      header: false,
    }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Regform />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '',
      paddingLeft: 60,
      paddingRight: 60,
  },
});
