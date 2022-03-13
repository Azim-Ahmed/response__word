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

// All buses logo import here---------------------------

import bus7 from '../image/Buses/bus7.jpg';
import bus8 from '../image/Buses/bus8.jpg';
import Achim from '../image/Buses/Achim.jpg';
import Agroduth from '../image/Buses/Agroduth.jpg';
import Airport from '../image/Buses/Airport.jpg';
import Akik from '../image/Buses/Akik.jpg';


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
                <View style={
                    {
                        height: 50,
                        marginVertical: 10,
                        marginHorizontal: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        borderRadius: 20
                    }}>

                    {/* -----------------Profile avatar starts here----------------- */}
                    <View
                        style={{
                            height: 42,
                            width: 42,
                            overflow: 'hidden',
                            borderRadius: 50,
                            position: 'relative',

                        }}>
                        <TouchableOpacity>
                            <Image
                                source={avatar}
                                resizeMode="contain"
                                style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* ------------------------------------search bar starts here---------- */}
                    <View >
                        <TextInput style={{ height: 42 }}
                            placeholder="Enter Bus name You Want to see"
                            type="text"
                        />
                    </View>


                    {/* ------------------------------------Settings menu starts here --------------*/}
                    <View
                        style={{
                            height: 42,
                            width: 42,
                            overflow: 'hidden',
                            borderRadius: 50,
                            position: 'relative',

                        }}>
                        <TouchableOpacity>
                            <Image
                                source={settings}
                                resizeMode="contain"
                                style={{
                                    height: 42,
                                    width: 42,
                                    overflow: 'hidden',
                                    borderRadius: 70,
                                    position: 'relative',
                                    backgroundColor: '#5C5F69'
                                }}
                            />
                        </TouchableOpacity>
                    </View>


                </View>

                {/* --------------------------------contente section starts here */}
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{ height: '75%' }}>

                    {/* -------------main contente starts here */}


                    <View style={{ marginHorizontal: 37 }}>



                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.busname}> 7 No Bus
                                </Text>
                                <Text style={styles.stoppage}>
                                    22 Stopage
                                </Text>

                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={bus7}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <View style={{ maxWidth: 200 }}>
                                    <Text
                                        style={styles.route}>
                                        Start: Gabtali

                                    </Text>
                                    <Text style={styles.route}>
                                        End: Sadarghat
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                display: 'flex',
                                // textAlign: 'right'
                                alignItems: 'flex-end'
                            }} >
                                <TouchableOpacity>
                                    <Text style={styles.details}>
                                        DETATILS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.busname}> 8 No Bus
                                </Text>
                                <Text style={styles.stoppage}>
                                    21 Stopage
                                </Text>

                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={bus8}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <View style={{ maxWidth: 200 }}>
                                    <Text
                                        style={styles.route}>
                                        Start: Jatrabari

                                    </Text>
                                    <Text style={styles.route}>
                                        End: Gabtali
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                display: 'flex',
                                // textAlign: 'right'
                                alignItems: 'flex-end'
                            }} >
                                <TouchableOpacity>
                                    <Text style={styles.details}>
                                        DETATILS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.busname}> 9 No Bus
                                </Text>
                                <Text style={styles.stoppage}>
                                    21 Stopage
                                </Text>

                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={bus8}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <View style={{ maxWidth: 200 }}>
                                    <Text
                                        style={styles.route}>
                                        Start: Jatrabari

                                    </Text>
                                    <Text style={styles.route}>
                                        End: Gabtali
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                display: 'flex',
                                // textAlign: 'right'
                                alignItems: 'flex-end'
                            }} >
                                <TouchableOpacity>
                                    <Text style={styles.details}>
                                        DETATILS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.busname}> Achim Poribahan
                                </Text>
                                <Text style={styles.stoppage}>
                                    34 Stopage
                                </Text>

                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={Achim}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <View style={{ maxWidth: 200 }}>
                                    <Text
                                        style={styles.route}>
                                        Start: Gabtali

                                    </Text>
                                    <Text style={styles.route}>
                                        End: Demra Staff Quarter
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                display: 'flex',
                                // textAlign: 'right'
                                alignItems: 'flex-end'
                            }} >
                                <TouchableOpacity>
                                    <Text style={styles.details}>
                                        DETATILS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.busname}> Agraduth
                                </Text>
                                <Text style={styles.stoppage}>
                                    20 Stopage
                                </Text>

                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={Agroduth}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <View style={{ maxWidth: 200 }}>
                                    <Text
                                        style={styles.route}>
                                        Start: Savar

                                    </Text>
                                    <Text style={styles.route}>
                                        End: NotunBazar
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                display: 'flex',
                                // textAlign: 'right'
                                alignItems: 'flex-end'
                            }} >
                                <TouchableOpacity>
                                    <Text style={styles.details}>
                                        DETATILS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.busname}> Airport Bangladesh
                                </Text>
                                <Text style={styles.stoppage}>
                                    28 Stopage
                                </Text>

                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={Airport}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <View style={{ maxWidth: 200 }}>
                                    <Text
                                        style={styles.route}>
                                        Start: Fulbaria

                                    </Text>
                                    <Text style={styles.route}>
                                        End: Abdullahpur
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                display: 'flex',
                                // textAlign: 'right'
                                alignItems: 'flex-end'
                            }} >
                                <TouchableOpacity>
                                    <Text style={styles.details}>
                                        DETATILS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={styles.busname}> Akik
                                </Text>
                                <Text style={styles.stoppage}>
                                    19 Stopage
                                </Text>

                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={Akik}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <View style={{ maxWidth: 200 }}>
                                    <Text
                                        style={styles.route}>
                                        Start: Ansar Camp

                                    </Text>
                                    <Text style={styles.route}>
                                        End: Uttar Badda
                                    </Text>
                                </View>

                            </View>
                            <View style={{
                                display: 'flex',
                                // textAlign: 'right'
                                alignItems: 'flex-end'
                            }} >
                                <TouchableOpacity>
                                    <Text style={styles.details}>
                                        DETATILS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

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

                    <TouchableOpacity >
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

    content: {

        height: 160,

        // alignItems: 'center',
        marginVertical: 10,
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

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    busname: {
        color: 'green',
        fontSize: 20,
        marginBottom: 4,
        fontWeight: '700',
    },

    stoppage: {
        color: 'white',
        fontSize: 15,
        marginBottom: 4,
        fontWeight: '700',
        backgroundColor: 'red',
        padding: 2,
        borderRadius: 7

    },

    img: {
        width: 80,
        height: 70,
        aspectRatio: 1,
        marginTop: 0,
        marginRight: 18,
    },

    route: {
        color: '#0F254F',
        fontSize: 14,
        marginBottom: 4,
        fontWeight: '700',
    },

    details: {
        color: 'white',
        backgroundColor: 'green',
        fontSize: 14,
        marginBottom: 4,
        fontWeight: '700',
        padding: 5,
        borderRadius: 7

    }

});

export default index;
