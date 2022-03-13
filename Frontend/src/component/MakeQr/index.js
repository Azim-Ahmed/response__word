import React, {useState} from 'react';
import type {Node} from 'react';
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
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
let logoFromFile = require('../image/profile.jpg');
// import QRCode from 'react-qr-code';
import QRCode from 'react-native-qrcode-svg';
import InputBox from '../InputBox';
import Buttons from '../Button';
import image1 from '../image/loginBg.png';
// import profile from '../image/profile.jpg';
import avatar from '../image/avatar.png';
import settings from '../image/Settings.png';

import HomeImg from '../image/Home.png';
import ProfileImg from '../image/Profile.png';
import QrCode from '../image/QrCode.png';

const index = ({navigation}) => {
  const userauth = useSelector(state => state.userAuth);
  const isDarkMode = useColorScheme() === 'dark';
  const [loggedIn, setLoggedIn] = useState({});
  const [QrData, setQrData] = useState(null);
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();

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

  const onSubmit = data => {
    console.log(data, 'data');
    setQrData(data);
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? '#fff' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ImageBackground
          source={image1}
          resizeMode="cover"
          style={{paddingBottom: 149}}>
          <View style={{marginLeft: 20, marginRight: 53}}>
            <View
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                marginBottom: 30,
                marginTop: 80,
              }}>
              <View
                style={{
                  height: 42,
                  width: 42,
                  overflow: 'hidden',
                  borderRadius: 50,
                  position: 'relative',
                }}>
                <Image
                  source={avatar}
                  resizeMode="contain"
                  style={{width: '100%', height: undefined, aspectRatio: 1}}
                />
              </View>
              <View>
                <Text
                  style={{
                    marginTop: 0,
                    color: '#fff',
                    paddingTop: 11,
                    paddingBottom: 12,
                    paddingLeft: 12,
                    paddingRight: 31,
                    fontSize: 15,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}>
                  {loggedIn?.user?.firstName &&
                    loggedIn?.user?.firstName + ' ' + userauth?.user.lastName}
                </Text>
              </View>
              <Image
                source={settings}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  aspectRatio: 1,
                  marginTop: 10,
                  marginLeft: 'auto',
                }}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                marginTop: 0,
                fontWeight: '600',
                fontSize: 36,
                color: '#fff',
              }}>
              SAFE
            </Text>
          </View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              marginTop: 0,
              fontWeight: '400',
              fontSize: 16,
              color: '#fff',
              textTransform: 'uppercase',
            }}>
            Transport
          </Text>
        </ImageBackground>
        <View>
          <Text>Bus Information</Text>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: 'please enter your bus name'},
            }}
            render={({field: {onChange, onBlur, value, name, ref}}) => (
              <InputBox
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="bus name"
                error={errors?.name}
                errorText={errors?.name?.message}
              />
            )}
          />
          <Controller
            name="busNumber"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: 'please enter your bus number'},
            }}
            render={({field: {onChange, onBlur, value, name, ref}}) => (
              <InputBox
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Bus Number"
                error={errors?.busNumber}
                errorText={errors?.busNumber?.message}
              />
            )}
          />
          <Controller
            name="PhoneNumber"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'please enter your Phone number',
              },
            }}
            render={({field: {onChange, onBlur, value, name, ref}}) => (
              <InputBox
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="phone Number"
                error={errors?.PhoneNumber}
                errorText={errors?.PhoneNumber?.message}
              />
            )}
          />
          <Text>Driver Information</Text>
          <Controller
            name="DriverName"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: 'please enter driver name'},
            }}
            render={({field: {onChange, onBlur, value, name, ref}}) => (
              <InputBox
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Driver Name"
                error={errors?.DriverName}
                errorText={errors?.DriverName?.message}
              />
            )}
          />

          <Controller
            name="DriverLicense"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: 'please enter driver license'},
            }}
            render={({field: {onChange, onBlur, value, name, ref}}) => (
              <InputBox
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Driver license"
                error={errors?.DriverLicense}
                errorText={errors?.DriverLicense?.message}
              />
            )}
          />
          <Controller
            name="DriverPhone"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'please enter driver phone number',
              },
            }}
            render={({field: {onChange, onBlur, value, name, ref}}) => (
              <InputBox
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Driver Phone"
                error={errors?.DriverPhone}
                errorText={errors?.DriverPhone?.message}
              />
            )}
          />
          <Buttons label="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <QRCode
            value={`Bus name:${QrData.name}, Bus Number:${QrData.busNumber}, Phone Number:${QrData.PhoneNumber}, Phone Number:${QrData.PhoneNumber}, Driver Name:${QrData.DriverName}, Driver license:${QrData.DriverLicense}, Driver Phone:${QrData.DriverPhone}`}
            // getRef={c => (this.svg = c)}
            logo={logoFromFile}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 12,
            paddingRight: 12,
            shadowColor: '#000',
            shadowOffset: {width: 15, height: 15},
            shadowOpacity: 10,
            shadowRadius: 20,
            elevation: 30,
            height: 75,
            backgroundColor: '#fff',
            marginTop: 30,
          }}>
          <View style={{width: 35, textAlign: 'center'}}>
            <Image
              source={HomeImg}
              resizeMode="contain"
              style={{
                width: 18,
                height: 20,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 3,
              }}
            />
            <Text
              style={{
                color: '#27AE60',
                fontSize: 12,
                fontWeight: '700',
                marginTop: 9,
              }}>
              Home
            </Text>
          </View>
          <View
            style={{
              width: 70,
              height: 58,
              backgroundColor: '#03CA51',
              borderRadius: 10,
              marginRight: 62,
              marginLeft: 62,
              paddingTop: 14,
              paddingBottom: 14,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <Image
              source={QrCode}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                aspectRatio: 1,
                marginTop: 0,
              }}
            />
          </View>
          <View style={{width: 37, textAlign: 'center'}}>
            <Image
              source={ProfileImg}
              resizeMode="contain"
              style={{
                width: 18,
                height: 20,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 3,
              }}
            />
            <Text
              style={{
                color: '#4F4F4F',
                fontSize: 12,
                fontWeight: '400',
                marginTop: 9,
              }}
              onPress={() =>
                navigation.navigate('ProfileScreen', {name: 'ProfileScreen'})
              }>
              Profile
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  alreadyMember: {
    flex: 1,
    marginTop: 21,
    fontWeight: '700',
    fontSize: 12,
    color: '#5C5F69',
    textTransform: 'capitalize',
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  submitButton: {
    borderRadius: 45,
    width: 300,
    textAlign: 'center',
    backgroundColor: '#00D253',
  },
  login: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 44,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default index;
