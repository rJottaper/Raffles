import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import NavigationHeader from '../../components/HeaderNavigation';

const Sort = ({ route }) => {
  const { toSort, title } = route.params
  
  const [sortNumbers, setSortNumber] = useState([]);
  const [winner, setWinner] = useState();

  useEffect(() => {
    setSortNumber(toSort);
  }, [])

  const draw = () => {
   const winner = sortNumbers[Math.floor(Math.random() * sortNumbers.length)]
   setWinner(winner);
  };

  return (
    <>
    <View style={{ backgroundColor: '#E0E5EF' }}>
      <NavigationHeader title="Sort" />
    </View>
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sort}>The Number Sort</Text>
      <Text style={styles.number}>Congratulations: {winner}</Text>
      <TouchableOpacity style={styles.button} onPress={() => draw()}>
        <Text style={styles.buttonText}>SORT</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E0E5EF',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    borderBottomWidth: 0.2,
    width: '20%',
    marginTop: 10,
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  sort: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#aab3bb',
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    width: '80%'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
})

export default Sort;