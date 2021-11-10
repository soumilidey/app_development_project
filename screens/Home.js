import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/wallpaper.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 150, height: 150 }}></Image>
            <Text style={styles.titleText}>LGBTQ+</Text>
            <Text style={styles.titleText}>APP</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Message')}>
            <Text style={styles.routeText}>Spreading Awareness</Text>
            <Image
              source={require('../assets/aware.jpg')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={styles.routeText}>Profile</Text>
            <Image
              source={require('../assets/profile.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Donate')}>
            <Text style={styles.routeText}>Donation</Text>
            <Image
              source={require('../assets/donate.jpg')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 50,
    backgroundColor: 'lightpink',
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'black',
  },
  routeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeImage: {
    position: 'absolute',
    top: -3,
    right: -15,
    height: 60,
    width: 50,
    resizeMode: 'contain',
  },
});
