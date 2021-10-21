import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavigationHeader from '../../components/HeaderNavigation';
import NumberCard from '../../components/NumberCard';

const raffleBuy = ({ route }) => {
  const { title, number } = route.params
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    let range = [];
    for (let i = 0; i < number; i++)
    range[i] = i + 1;
    setNumbers(range)
  }, [])

  const navigation = useNavigation();
  const [isBuy, setIsBuy] = useState(false);
  const [toSort, setToSort] = useState([]);

  const toBuy = number => {
    navigation.navigate('Buy', {
      number: number,
    });
    setToSort(oldArray => [...oldArray, number])
  };

  console.log(toSort);

  // const test = numbers.find(item => item == id)
    

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title={title} />
      <FlatList
        style={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        data={numbers}
        keyExtractor={item => item}
        renderItem={({ item }) => <NumberCard number={item} isBuy={isBuy} onPress={() => toBuy(item)}  /> }
        numColumns={2}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sort', { toSort, title: title })}>
        <Text style={styles.buttonText}>SORT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5EF',
  },
  list: {
    marginTop: 20
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#aab3bb',
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
});

export default raffleBuy;