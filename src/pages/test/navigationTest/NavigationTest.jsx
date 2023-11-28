import React from 'react';
import {View} from 'react-native';

import useStyleNavigationTest from './useStyleNavigationTest';
import TabIconItem from '../tabIconItem/TabIconItem';
import Container from '../container/Container';
import COLORS from '../../assets/styles/stylesColors';

function NavigationTest() {
  const styles = useStyleNavigationTest();
  const handlerTest = () => console.log('test');
  return (
    <Container>
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
    </Container>
  );
}

export default NavigationTest;
