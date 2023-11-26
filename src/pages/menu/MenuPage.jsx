import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {routesButtonArray} from '../../routes/routes-data';

import MenuItem from './menuItem/MenuItem';
import LayoutImage from '../../components/layoutImage/LayoutImage';

import useStyleMenuPage from './useStyleMenuPage';
import List from '../../components/list/List';

function MenuPage({navigation}) {
  const styles = useStyleMenuPage();

  return (
    <LayoutImage title="Меню" imgSrc={require('../../assets/images/bg/2.webp')}>
      <View style={styles.page}>
        <View style={styles.list}>
          <List
            data={routesButtonArray}
            Component={MenuItem}
            onPress={name => navigation.push(name)}
          />
        </View>
      </View>
    </LayoutImage>
  );
}

export default MenuPage;
