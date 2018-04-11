import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
 } from 'react-native';

import Regform form './app/Component/Regform';
import { StackNavigator } from 'react-navigation'


export default class Login extends React.Component {
  render() {
    return (
      <Text>test</Text>
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
