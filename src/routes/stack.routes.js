import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home'
import addRifas from '../screens/addRifas';
import raffleBuy from '../screens/raffleBuy';
import Buy from '../screens/buy';
import Sort from '../screens/sort';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="addRifas" component={addRifas} />
      <Screen name="raffleBuy" component={raffleBuy} />
      <Screen name="Buy" component={Buy} />
      <Screen name="Sort" component={Sort} />
    </Navigator>
  );
};

export default AppRoutes;

    

