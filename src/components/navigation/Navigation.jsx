import React from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {ROUTES_DATA} from '../../routes/routes-data';
import NavigationItem from '../navigationItem/NavigationItem';
import useStyleNavigation from './useStyleNavigation';

function Navigation() {
  const styles = useStyleNavigation();
  const navigation = useNavigation();
  const route = useRoute();

  const goMenu = () => navigation.push(ROUTES_DATA.menu.name);
  const goProducts = () => navigation.push(ROUTES_DATA.products.name);
  const goBasket = () => navigation.push(ROUTES_DATA.basket.name);

  return (
    <View style={styles.navigation}>
      <NavigationItem
        iconName="bars"
        onPress={goMenu}
        isActive={route.name === ROUTES_DATA.menu}
      />

      <NavigationItem
        iconName="shop"
        onPress={goProducts}
        isActive={route.name === ROUTES_DATA.products.name}
      />
      <NavigationItem
        iconName="basket-shopping"
        onPress={goBasket}
        isActive={route.name === ROUTES_DATA.basket.name}
      />
    </View>
  );
}

export default Navigation;
