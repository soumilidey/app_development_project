import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert, FlatList, Image, ImageBackground, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import axios from 'axios';

export default class DonateScreen extends React.Component {
 
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Donate</Text>
        <Text style={styles.text}>
  Contact: email us on abc@gmail.com
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'pink',
  },
  text: {
    color: 'teal',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

