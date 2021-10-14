import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NumberCard = ({ number }) => {
  const navigation = useNavigation();
  const [isBuy, setIsBuy] = useState(false);

  const isToBuy = () => {
    navigation.navigate('Buy', {
      number: number
    });
    setIsBuy(true)
  }

  if (isBuy == false) {
    return (
      <TouchableOpacity style={styles.container} onPress={isToBuy}>
        <View style={styles.cardDesing} />
        <Text style={styles.title}>{number}</Text>
        <Icon name="angle-right" style={styles.icon} />
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.isBuy}>
        <View style={styles.cardDesing} />
        <Text style={styles.title}>{number}</Text>
        <Icon name="angle-right" style={styles.icon} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#aab3bb',
    marginTop: 10,
    marginLeft: 15,
    padding: 10,
    width: '30%',
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  isBuy: {
    flexDirection: 'row',
    backgroundColor: '#bc4e59',
    marginTop: 10,
    marginLeft: 15,
    padding: 10,
    width: '30%',
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  cardDesing: {
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 20,
    marginTop: 3,
  }
});

export default NumberCard;