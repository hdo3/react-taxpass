import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  } from 'react-native';

export default class Regform extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>

        <TextInput style={styles.TextInput} placeholder="Your name"
        underlineColorAndroid={'transparent'} />

        <TextInput style={styles.TextInput} placeholder="Your email"
        underlineColorAndroid={'transparent'} />

        <TextInput style={styles.TextInput} placeholder="Your password"
        secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
      alignSelf:'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  TextInput: {
    alightSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
