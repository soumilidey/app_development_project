import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert, FlatList, Image, ImageBackground, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import axios from 'axios';

export default class ProfileScreen extends React.Component {
 
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Profile</Text>
        <Text style={styles.text}>
 Name:          Email:
        </Text>
      </View> 
    );
  } 
}
const styles = StyleSheet.create({ 
  textContainer: {
    backgroundColor: 'crimson',
  },
  text: {
    color: 'green',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

