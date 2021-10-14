import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({ title, award, number, id }) => {
  const navigation = useNavigation();

  const sendItems = () => {
    navigation.navigate('raffleBuy', {
      title: title,
      award: award,
      number: number,
      id: id
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{award}</Text>
        </View>
        <TouchableOpacity style={styles.iconView} onPress={sendItems} >
          <Icon name="angle-right" style={styles.icon} /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#B9C7DA',
    marginTop: 5,
  },
  content: {
    width: '100%',
    padding: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 15,
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },  
  icon: {
    fontSize: 30,
    marginRight: 10
  }
});

export default Card;