import React from 'react';
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
} from 'react-native';

const Input = props => {
  return (
    <SafeAreaView>
      {/* <Text>{props.label}</Text> */}
      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        style={styles.input}
      />
      <Text className="text-muted">{props.errorMessage}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    width: 300,
    padding: 10,
    backgroundColor: '#fafafa',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    color: '#5C5F69',
    borderRadius: 45,
  },
});

export default Input;
