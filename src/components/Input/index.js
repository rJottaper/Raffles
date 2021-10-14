import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ title, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder={placeholder} maxLength={30} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 0.2
  },
  input: {
    width: '80%',
    borderBottomWidth: 0.5
  }
});

export default Input;