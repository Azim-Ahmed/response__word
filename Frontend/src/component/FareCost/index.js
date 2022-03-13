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
import Arrow from '../image/Arrow.png'

// -------------------Dimension Import------------------
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// --------------------Menu bar import---------------------------------------------
// import {FontAwesome5} from '@expo'

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
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        marginHorizontal: 5,

                        // justifyContent: 'space-between',
                        // alignItems: 'center',
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
                    style={{ height: '54%', backgroundColor: 'white' }}>

                    {/* -------------main contente starts here */}


                    <View style={{ paddingHorizontal: 18 }}>

                        <Text style={{
                            color: 'red',
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: 20

                        }}>
                            Special Notes
                        </Text>

                        <Text style={{ textAlign: 'justify' }}>
                            1.The fare amounts are available only for the bus stops listed in the BRTA's charts.{'\n'}
                            {'\n'}
                            2.the bus fare charts are provided by BRTA. The charts are prepared by setting the minimum fare to TK. 10, so no extra fare can't be claimed.{'\n'}
                            {'\n'}
                            3.The increase in fare will not be applicable for vehicles running Gas,Octen or Petrol.
                        </Text>


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
                        paddingVertical: 5,
                        paddingHorizontal: 30,
                        bottom: 0
                    }}>

                    {/* --------------------------------Home button------------- */}


                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
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

                    <TouchableOpacity>
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
