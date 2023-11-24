import React from 'react';
import {Text, View} from 'react-native';

import LayoutMain from '../../components/layoutMain/LayoutMain';
import useStyleMenu from './useStyleMenuPage';

function MenuPage({route}) {
  const styles = useStyleMenu();
  return (
    <>
      <View style={styles.menu}>
        <Text>Menu</Text>
      </View>
    </>
  );
}

export default LayoutMain(MenuPage);
