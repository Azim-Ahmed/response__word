/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  useColorScheme,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './src/component/SignUp';
import HomeScreen from './src/component/HomeScreen';
import Location from './src/component/Location';
import ProfileScreen from './src/component/ProfileScreen';
import SplashScreen from './src/component/SplashScreen/SplashScreen';
import generateQr from './src/component/MakeQr';
import FindBus from './src/component/FindBus';
import FareCost from './src/component/FareCost';
import Login from './src/component/Login';
import signin from './src/component/signin';


// -----------------------------------DrawerMenu starts here----------------------



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loggedIn, setLoggedIn] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#ffff' : '#ffff',
    height: '100%',
  };
  React.useEffect(() => {
    StatusBar.setBackgroundColor('#FF573300');
    StatusBar.setTranslucent(true);
  }, []);

  const Stack = createNativeStackNavigator();

  const isLogged = async () => {
    const loggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (loggedIn == '1') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  isLogged();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'SplashScreen' }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'HomeScreen' }}
        />
        <Stack.Screen
          name="FindBus"
          component={FindBus}
          options={{ title: 'FindBus' }}
        />
        <Stack.Screen
          name="FareCost"
          component={FareCost}
          options={{ title: 'FareCost' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="signin"
          component={signin}
          options={{ title: 'signin' }}
        />
        <Stack.Screen
          name="SignUp"
          component={loggedIn ? HomeScreen : SignUp}
          options={{ title: 'SignUp' }}
          setLoggedIns={setLoggedIn}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ title: 'Location' }}
        />
        <Stack.Screen
          name="generateQr"
          component={generateQr}
          options={{ title: 'generateQr' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'ProfileScreen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
