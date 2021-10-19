import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationHeader from '../../components/HeaderNavigation';
import Input from '../../components/Input'

const Buy = ({ route }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  
  const { number } = route.params

  const buy = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="Buy a Raffle" />
      <Input title="Buyer's Name" value={name} onChangeText={setName} placeholder="Your Name" />
      <Text style={styles.number}>Chosen Number: {number}</Text>
      <TouchableOpacity style={styles.button} onPress={buy}>
        <Text style={styles.buttonText}>Buy</Text>
        <Icon name="check" style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5EF',
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },  
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#aab3bb',
    marginHorizontal: 15,
    marginTop: 10,
    padding: 12,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  icon: {
    fontSize: 18,
    color: '#FFF',
    marginLeft: 5,
    marginTop: 4
  }
});

export default Buy;