import React from 'react';
import {View} from 'react-native';

import NavigationItem from '../navigationItem/NavigationItem';

import useStyleNavigation from './useStyleNavigation';

function Navigation() {
  const styles = useStyleNavigation();
  const handlerTest = () => console.log('test');
  return (
    <View style={styles.navigation}>
      <NavigationItem iconName="basket-shopping" onPress={handlerTest} />
      <NavigationItem iconName="basket-shopping" onPress={handlerTest} />
    </View>
  );
}

export default Navigation;
