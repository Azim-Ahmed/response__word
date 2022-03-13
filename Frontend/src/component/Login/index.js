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
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,

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
                    height: 200,
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

                <View style={{ height: 350 }}>
                    <ScrollView >
                        <View style={{
                            backgroundColor: 'lightgray',
                            marginHorizontal: 20,
                            paddingHorizontal: 10,
                            borderRadius: 7,
                            paddingVertical: 10,
                            // height: 200,

                        }}>
                            <Text style={styles.text}>First Name</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter Your First name'>

                            </TextInput>
                            <Text style={styles.text}>Last Name</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter Your First name'>
                            </TextInput>

                            <Text style={styles.text}>Phone Number</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter Your Phone Number'>
                            </TextInput>

                            <Text style={styles.text}>Bus Name</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter Bus name'>
                            </TextInput>

                            <Text style={styles.text}>Bus No</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter bus license no'>
                            </TextInput>

                            <Text style={styles.text}>Email</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter Email Address'
                                keyboardType="email-address"
                                autoCapitalize="none">
                            </TextInput>

                            <Text style={styles.text}>Password</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Enter a Password'>
                            </TextInput>

                            <Text style={styles.text}>Confirm Password</Text>
                            <TextInput style={styles.inputs}
                                placeholder='Re-Type Password'>
                            </TextInput>



                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginHorizontal: 20
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                        <Text style={styles.submitButton}>Signup</Text>
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
