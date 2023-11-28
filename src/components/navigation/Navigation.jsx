import React from 'react';
import {View} from 'react-native';

import TabIconItem from '../tabIconItem/TabIconItem';

import COLORS from '../../assets/styles/stylesColors';
import useStyleNavigation from './useStyleNavigation';

function Navigation() {
  const styles = useStyleNavigation();
  const handlerTest = () => console.log('test');
  return (
    <View style={styles.navigation}>
      <TabIconItem
        iconName="basket-shopping"
        iconSize={32}
        iconColor={COLORS.accent}
        onPress={handlerTest}
      />
      <TabIconItem
        iconName="basket-shopping"
        iconSize={32}
        iconColor={COLORS.accent}
        onPress={handlerTest}
      />
    </View>
  );
}

export default Navigation;
