import React from 'react';
import {Text, View} from 'react-native';

import useStyleMenu from './useStyleMenuPage';

function MenuPage() {
  const styles = useStyleMenu();
  return (
    <View style={styles.menu}>
      <Text>Menu</Text>
    </View>
  );
}

export default MenuPage;
