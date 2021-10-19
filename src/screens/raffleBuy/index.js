import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';

import NavigationHeader from '../../components/HeaderNavigation';
import NumberCard from '../../components/NumberCard';

const raffleBuy = ({ route }) => {
  const { title, number } = route.params
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    let range = [];
    for (let i = 0; i < number; i ++)
    range[i] = i + 1;
    setNumbers(range)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title={title} />
      <FlatList
        style={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        data={numbers}
        key={item => item}
        renderItem={({ item }) => <NumberCard number={item} /> }
        numColumns={2}
      />
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
  }
});

export default raffleBuy;