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
// -------------------------------------axios import here----------------------
import axios from 'axios';
import HeaderSearchBarStyle from 'react-native-header-search-bar/lib/src/HeaderSearchBar/HeaderSearchBar.style';

const index = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const InsertRecord = () => {



        if (Email.length == 0 || Password.length == 0) {
            alert("Requred Field missing");

        }
        else {
            alert("Login Successful")
        }
    }

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
                    height: 230,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    // marginLeft: 30
                }}>
                    <Image
                        source={Logo}
                        resizeMode="contain"
                        style={{

                            width: '100%',
                        }}
                    />
                </View>

                <View>
                    <ScrollView >
                        <View style={{
                            // backgroundColor: 'lightgray',
                            marginHorizontal: 20,
                            paddingHorizontal: 10,
                            borderRadius: 7,
                            paddingVertical: 10,
                            // height: 200,

                        }}>

                            <Text style={styles.text}>Email</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter Email Address'
                                autoCapitalize='none'
                                keyboardType="email-address"
                                onChangeText={(text) => setEmail(text)}>

                            </TextInput>

                            <Text style={styles.text}>Password</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter Your Password'
                                secureTextEntry
                                autoCapitalize='none'

                                onChangeText={Password => setPassword(Password)}>
                            </TextInput>


                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginHorizontal: 20
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={styles.submitButton}>
                            Login
                        </Text>
                    </TouchableOpacity>

                </View>










            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({

    text: {
        color: '#0F254F',
        fontSize: 14,
        marginLeft: 5,
        marginBottom: 5,
        fontWeight: '700',
    },

    submitButton: {
        borderRadius: 7,

        backgroundColor: 'orange',
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 8,
        padding: 5,
        right: 0,
    },

    inputs: {
        height: 40,
        marginBottom: 12,
        padding: 10,
        backgroundColor: '#fafafa',

        color: '#5C5F69',
        borderRadius: 7,
    },

});
export default index;
