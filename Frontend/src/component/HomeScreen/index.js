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
import avatar from '../image/avatar.png';
import settings from '../image/Settings.png';
import amico from '../image/amico.png';
import IconRight from '../image/IconRight.png';
import bus from '../image/bus.png';
import contact from '../image/Contact.png';
import History from '../image/history.png';
import HomeImg from '../image/Home.png';
import ProfileImg from '../image/Profile.png';
import QrCode from '../image/QrCode.png';
import generateQr from '../image/generateQr.png';
import FareLogo from '../image/FareLogo.png';
import Location from '../image/location.png';
import Arrow from '../image/Arrow.png';
import Seat from '../image/Seat.png';

// -------------------Dimension Import------------------
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  // console.log('gg', loggedIn);
  return (
    <>
      {/* <StatusBar barStyle={isDarkMode ? '#fff' : 'dark-content'} /> */}
      <View style={{
        // backgroundStyle,
        height: '100%',
        marginVertical: 35,
        backgroundColor: 'white'

      }}>

        {/* -------------------------------header section starts here--- */}

        <View style={
          {
            height: 190,
            paddingTop: 10,
            marginBottom: 15,
            paddingHorizontal: 15,
            marginHorizontal: 5,
            backgroundColor: 'green',
            borderRadius: 7
          }}>

          {/* -----------------Profile avatar starts here----------------- */}
          <View style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            <View
              style={{
                height: '100%',
                width: '12%',
                overflow: 'hidden',
                borderRadius: 50,
                position: 'relative',

              }}>
              <TouchableOpacity >
                <Image
                  source={avatar}
                  resizeMode="contain"
                  style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                />
              </TouchableOpacity>

            </View>

            <Text style={{
              color: 'white',
              fontSize: 28,
              // marginBottom: 4,
              fontWeight: '700',
              marginLeft: 20
            }}>
              City Guide
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={{
              color: 'red',
              fontSize: 16,
              // marginBottom: 4,
              fontWeight: '700',
              marginRight: 12,
              textAlign: 'right'
            }}>
              Suggest Correction
            </Text>
          </TouchableOpacity>

          <View style={{
            // marginHorizontal: 5,
            marginBottom: 5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>

            <View
              style={{
                height: 50,
                width: 50,
                overflow: 'hidden',
                borderRadius: 50,
                position: 'relative',


              }}>
              <TouchableOpacity>
                <Image
                  source={Arrow}
                  resizeMode="contain"
                  style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                />
              </TouchableOpacity>

            </View>


            <View style={{ width: '80%' }}>
              <TextInput style={{
                overflow: 'hidden',
                marginVertical: 8,
                backgroundColor: 'white',
                paddingVertical: 7,
                borderRadius: 7
              }}
                placeholder='Enter Destination'
                type='text'>

              </TextInput>
              <TextInput style={{
                overflow: 'hidden', backgroundColor: 'white',
                paddingVertical: 7,
                borderRadius: 7
              }}
                placeholder='Enter Destination'
                type='text'>

              </TextInput>
            </View>
          </View>

        </View>

        {/* --------------------------------contente section starts here */}
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ height: '54%' }}>

          {/* -------------main contente starts here */}


          <View style={{ marginHorizontal: 25 }}>

            <TouchableOpacity style={styles.Content}>

              <Text style={styles.heading}> Track Nearby Running Buses
              </Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>

                <Image
                  source={Location}
                  resizeMode="contain"
                  style={styles.img}
                />
                <View style={{ width: 230 }}>
                  <Text
                    style={styles.text}>
                    See how many buses are currently running on the road near You and pick up your suitable bus among them

                  </Text>
                </View>

              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.Content}>

              <Text style={styles.heading}> Check Seat Availability
              </Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>

                <Image
                  source={Seat}
                  resizeMode="contain"
                  style={styles.img}
                />
                <View style={{ width: 230 }}>
                  <Text
                    style={styles.text}>
                    Check seats are available or not for you providing by the driver

                  </Text>
                </View>

              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.Content}>

              <Text style={styles.heading}> See Sorrounding places
              </Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>

                <Image
                  source={Location}
                  resizeMode="contain"
                  style={styles.img}
                />
                <View style={{ width: 230 }}>
                  <Text
                    style={styles.text}>
                    see nearby hospitals, public toilets and nearby gas station, shopping mall etc.

                  </Text>
                </View>

              </View>

            </TouchableOpacity>
          </View>

        </ScrollView>


        {/* --------------------------Footer section starts here----------- */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
            height: '14%',
            backgroundColor: 'whitesmoke',
            // marginVertical: 5,
            paddingHorizontal: 30,
            paddingVertical: 5,
            bottom: 0
          }}>

          {/* --------------------------------Home button------------- */}


          <TouchableOpacity >
            <View>
              <Image
                source={HomeImg}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 12,
                  fontWeight: '700',
                  marginTop: 5,
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>

          {/* ---------------------------fare logo starts here----------------- */}

          <TouchableOpacity onPress={() => navigation.navigate('FareCost')}>
            <View>
              <Image
                source={FareLogo}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  marginLeft: 9
                }}
              />
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 12,
                  fontWeight: '700',
                  marginTop: 5,
                }}>
                Explore Fare
              </Text>
            </View>
          </TouchableOpacity>

          {/* ----------------------Bus Details starts here------------- */}

          <TouchableOpacity onPress={() => navigation.navigate('FindBus')}>
            <View>
              <Image
                source={bus}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  marginLeft: 9
                }}
              />
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 12,
                  fontWeight: '700',
                  marginTop: 5,
                }} >
                Bus Details
              </Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>


    </>
  );
};

const styles = StyleSheet.create({
  Content: {
    height: 105,

    // alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 3,
    shadowRadius: 7,
    elevation: 3,
    borderRadius: 15,
    backgroundColor: 'white',
  },

  heading: {
    color: 'green',
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '700',
    // textAlign: 'justify'
  },

  img: {

    width: 50,
    height: 50,
    aspectRatio: 1,
    marginTop: 0,
    marginRight: 10,

  },
  text: {
    // color: '#0F254F',
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: 4,
    // fontWeight: '700',
  }
});

export default index;
