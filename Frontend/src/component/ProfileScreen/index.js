import React, {useState} from 'react';
import type {Node} from 'react';

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

import {useDispatch, useSelector} from 'react-redux';

import image1 from '../image/loginBg.png';
// import profile from '../image/profile.jpg';
import avatar from '../image/avatar.png';
import DoubleRight from '../image/DoubleRight.png';
import amico from '../image/amico.png';
import IconRight from '../image/IconRight.png';
import bus from '../image/bus.png';
import contact from '../image/Contact.png';
import History from '../image/history.png';
import HomeImg from '../image/Home.png';
import ProfileImg from '../image/Profile.png';
import QrCode from '../image/QrCode.png';

const index = ({navigation}) => {
  const userauth = useSelector(state => state.userAuth);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#ffff' : '#ffff',
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
              <Image
                source={DoubleRight}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  aspectRatio: 1,
                  marginTop: 10,
                  marginLeft: 'auto',
                }}
              />
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
                  {userauth.user.firstName &&
                    userauth?.user.firstName + ' ' + userauth?.user.lastName}
                </Text>
              </View>
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
        <View />
        <View style={{marginLeft: 37, marginRight: 37}}>
          {/* <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 12,
              shadowColor: '#000',
              shadowOffset: {width: 3, height: 3},
              shadowOpacity: 1,
              shadowRadius: 7,
              elevation: 3,
              borderRadius: 15,
              backgroundColor: '#fff',
            }}>
            <Image
              source={amico}
              resizeMode="contain"
              style={{
                width: 60,
                height: 55,
                aspectRatio: 1,
                marginTop: 0,
                marginRight: 18,
              }}
            />
            <View style={{maxWidth: 200}}>
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 14,
                  marginBottom: 4,
                  fontWeight: '700',
                }}>
                Report Board
              </Text>
              <Text style={{color: '#5C5F69', fontSize: 12}}>
                If you have facing any problem? Report this, we will take action
                as soon.
              </Text>
            </View>
            <Image
              source={IconRight}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 'auto',
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 12,
              shadowColor: '#000',
              shadowOffset: {width: 3, height: 3},
              shadowOpacity: 1,
              shadowRadius: 7,
              elevation: 3,
              borderRadius: 15,
              backgroundColor: '#fff',
            }}>
            <Image
              source={bus}
              resizeMode="contain"
              style={{
                width: 60,
                height: 55,
                aspectRatio: 1,
                marginTop: 0,
                marginRight: 18,
              }}
            />
            <View style={{maxWidth: 200}}>
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 14,
                  marginBottom: 4,
                  fontWeight: '700',
                }}>
                Bus Info
              </Text>
              <Text style={{color: '#5C5F69', fontSize: 12}}>
                You can view the Bus information.
              </Text>
            </View>
            <Image
              source={IconRight}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 'auto',
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 12,
              shadowColor: '#000',
              shadowOffset: {width: 3, height: 3},
              shadowOpacity: 1,
              shadowRadius: 7,
              elevation: 3,
              borderRadius: 15,
              backgroundColor: '#fff',
            }}>
            <Image
              source={contact}
              resizeMode="contain"
              style={{
                width: 60,
                height: 55,
                aspectRatio: 1,
                marginTop: 0,
                marginRight: 18,
              }}
            />
            <View style={{maxWidth: 200}}>
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 14,
                  marginBottom: 4,
                  fontWeight: '700',
                }}>
                Emergency Contact
              </Text>
              <Text style={{color: '#5C5F69', fontSize: 12}}>
                You can used upto 5 emergency number, Who person get
                notification.
              </Text>
            </View>
            <Image
              source={IconRight}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 'auto',
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 12,
              paddingRight: 12,
              shadowColor: '#000',
              shadowOffset: {width: 3, height: 3},
              shadowOpacity: 1,
              shadowRadius: 7,
              elevation: 3,
              borderRadius: 15,
              backgroundColor: '#fff',
            }}>
            <Image
              source={History}
              resizeMode="contain"
              style={{
                width: 60,
                height: 55,
                aspectRatio: 1,
                marginTop: 0,
                marginRight: 18,
              }}
            />
            <View style={{maxWidth: 200}}>
              <Text
                style={{
                  color: '#0F254F',
                  fontSize: 14,
                  marginBottom: 4,
                  fontWeight: '700',
                }}>
                View History
              </Text>
              <Text style={{color: '#5C5F69', fontSize: 12}}>
                View all of used history.
              </Text>
            </View>
            <Image
              source={IconRight}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 'auto',
              }}
            />
          </View> */}
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
              }}
              onPress={() =>
                navigation.navigate('HomeScreen', {name: 'HomeScreen'})
              }>
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
