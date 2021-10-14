import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavigationHeader from '../../components/HeaderNavigation';
import Card from '../../components/Card';

const Home = ({ route }) => {
  const navigation = useNavigation();

  const [rifas, setRifas] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { id, title, award, number } = route.params
      setRifas(oldData => [ ...oldData, { id, title, award, number }])
    }
  }, [route.params])

  const renderRifas = () => {
    if (rifas.length < 1) {
      return (
        <View style={styles.titleView}>
          <Text style={styles.title}>There is no raffle at the moment</Text>
        </View>
      );
    } else {
      return (
        <View>
          <FlatList 
            data={rifas}
            key={item => item.id}
            renderItem={({ item }) => <Card title={item.title} award={item.award} number={item.number} id={item.id} /> }
          />
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="Raffles" name="plus" onPress={() => navigation.navigate('addRifas')} />
      <View>
        {renderRifas()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E0E5EF',
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default Home;