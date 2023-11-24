import React from 'react';
import {Text, View} from 'react-native';

import useStyleMenu from './useStyleMenu';

function Menu() {
  const styles = useStyleMenu();
  return (
    <View style={styles.menu}>
      <Text>Menu</Text>
    </View>
  );
}

export default Menu;
