import React from 'react'
import avatar from '../image/avatar.png';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
// import { FontAwesome5 } from '@expo/vector-icons'

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>

                    <TouchableOpacity style={{ alignItems: 'flex-end', margin: 16 }}
                        onPress={this.props.navigation.openDrawer}>
                        <Image
                            source={avatar}
                            resizeMode="contain"
                            style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.text}>{this.props.name} homescreenScreen</Text>
                    </View>

                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500'
    }
})