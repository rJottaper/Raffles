import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';

import NavigationHeader from '../../components/HeaderNavigation';
import NumberCard from '../../components/NumberCard';

const raffleBuy = ({ route }) => {
  const { title, number } = route.params

  const renderNumbers = (n) => {
    let range = [];
    for (let i = 0; i < n; i ++)
    range[i] = i + 1;
    return range;
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title={title} />
      <FlatList
        style={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        data={renderNumbers(number)}
        key={item => item.id}
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