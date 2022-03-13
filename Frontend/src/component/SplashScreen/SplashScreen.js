// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import image1 from '../image/AppsLogo.png';

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('isLoggedIn').then(value =>
        navigation.replace(value === 1 ? 'Location' : 'SignUp'),
      );
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={image1}
        resizeMode="contain"
      />

      <Text style={{ color: 'orange', fontSize: 30, fontWeight: '700' }}>
        WELCOME
      </Text>

      <ActivityIndicator
        animating={animating}
        color="orange"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
