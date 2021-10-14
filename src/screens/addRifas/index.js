import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Picker } from '@react-native-picker/picker'
import { v4 as uuidv4 } from 'uuid';
 
import NavigationHeader from '../../components/HeaderNavigation';
import Input from '../../components/Input';

const addRifas = () => {
  const navigation = useNavigation();

  const [title, settitle] = useState('');
  const [award, setAward] = useState('');
  const [number, setNumber] = useState(0);

  const id = uuidv4();

  const createRaffle = () => {
    if (title == '' || title == undefined) {
      Alert.alert('Please, check the title!')
    } else if (award == '' || award == undefined) {
      Alert.alert('Please, check the award')
    } else if (number == 0 || number == undefined) {
      Alert.alert('Please, check the number of tickets')
    } else {
      navigation.navigate('Home', {
        id: id,
        title: title,
        award: award,
        number: number
      });
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="Create Raffle" />
      <Input title="Title" value={title} onChangeText={newtitle => settitle(newtitle)} placeholder="Raffle title" />
      <Input title="Award" value={award} onChangeText={setAward} placeholder="Award Winner" />
      <Text style={styles.title}>Quantity</Text>
      <Picker
        selectedValue={number}
        onValueChange={(itemValue, itemIndex) =>
          setNumber(itemValue)
        }>
        <Picker.Item label="0" value={0} />
        <Picker.Item label="20" value={20} />
        <Picker.Item label="30" value={30} />
        <Picker.Item label="50" value={50} /> 
      </Picker>
      <TouchableOpacity style={styles.button} onPress={() => createRaffle()}>
        <Text style={styles.buttonText}>Save</Text>
        <Icon name="check" style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#E0E5EF',
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 0.2,
    width: '20%',
    marginTop: 10,
    marginLeft: 15
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

export default addRifas;