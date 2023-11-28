import React from 'react';
import {View} from 'react-native';

import useStyleNavigationTest from './useStyleNavigationTest';
import TabIconItem from '../../../components/tabIconItem/TabIconItem';
import ContainerTest from '../containerTest/ContainerTest';
import COLORS from '../../../assets/styles/stylesColors';

function NavigationTest() {
  const styles = useStyleNavigationTest();
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

export default NavigationTest;
