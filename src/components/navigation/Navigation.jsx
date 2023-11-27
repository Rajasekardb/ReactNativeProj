import React from 'react';
import {Text, View} from 'react-native';

import useStyleNavigation from './useStyleNavigation';
import TabIconItem from '../tabIconItem/TabIconItem';
import Container from '../container/Container';
import COLORS from '../../assets/styles/stylesColors';

function Navigation() {
  const styles = useStyleNavigation();
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

export default Navigation;
