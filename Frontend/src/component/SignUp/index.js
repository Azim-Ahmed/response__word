import React, { useState } from 'react';
import type { Node } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import image1 from '../image/loginBg.png';
// import profile from '../image/profile.jpg';
import Logo from '../image/AppsLogo.png';

// -------------------Dimension Import------------------
import { Dimensions } from 'react-native';
import { overlay } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// -------------------------------------all import ends here----------------------

const index = ({ navigation }) => {
  const userauth = useSelector(state => state.userAuth);
  const isDarkMode = useColorScheme() === 'dark';
  const [loggedIn, setLoggedIn] = useState({});
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#ffff' : '#ffff',
  };

  const userFormLogin = async () => {
    const loggedIn = await AsyncStorage.getItem('userData');
    setLoggedIn(JSON.parse(loggedIn));
    if (userauth.authenticate) {
      // return <Redirect to={`/`} />;
      await AsyncStorage.setItem('userData', JSON.stringify(userauth));
    } else {
      null;
    }
  };
  userFormLogin();
  return (
    <>
      {/* <StatusBar barStyle={isDarkMode ? '#fff' : 'dark-content'} /> */}
      <SafeAreaView style={{

        height: '100%',
        marginVertical: 35,
        backgroundColor: 'white',

      }}>
        <View style={{

          // backgroundColor: 'gray',
          height: '50%',
          overflow: 'hidden'
        }}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={{

              width: '100%',
              // height: 50,
              // aspectRatio: 1,
              alignItems: 'flex-start',
              // marginTop: ,
              // marginRight: 18,


            }}
          />
        </View>


        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{
              color: 'white',
              backgroundColor: 'orange',
              fontSize: 18,

              marginRight: 10,
              fontWeight: '700',
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 7,
            }} >
              SignUp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{
              color: 'white',
              backgroundColor: 'orange',
              fontSize: 18,

              fontWeight: '700',
              padding: 5,
              borderRadius: 7,

            }}>
              Passenger
            </Text>
          </TouchableOpacity>

        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: '#0F254F',
            fontSize: 12,
            fontWeight: '700',
            marginRight: 5.

          }}>Already a Member?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('signin')}>
            <Text style={{ color: 'red', fontWeight: '700' }}>Sign in</Text>
          </TouchableOpacity>
        </View>


      </SafeAreaView>
    </>
  );
};
export default index;
