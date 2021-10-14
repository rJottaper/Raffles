import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavigationHeader = ({ title, name, onPress }) => {
  if (Icon) {
    return (
      <View style={styles.container}>
        <Text style={styles.viewTitle}>
          {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Icon name={name} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  } else {
      return (
        <View>
          {title}
        </View>
      );
    }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  icon: {
    fontSize: 20,
    marginTop: 6,
  }
});

export default NavigationHeader;