import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {routesButtonArray} from '../../routes/routes-data';

import MenuItem from './menuItem/MenuItem';
import LayoutHoc from '../../components/layoutHoc/LayoutHoc';

import useStyleMenuPage from './useStyleMenuPage';
import List from '../../components/list/List';

function MenuPage({navigation}) {
  const styles = useStyleMenuPage();

  return (
    <View style={styles.page}>
      <View style={styles.list}>
        <List
          data={routesButtonArray}
          Component={MenuItem}
          onPress={name => navigation.push(name)}
        />
      </View>
    </View>
  );
}

export default LayoutHoc(MenuPage, {title: 'MenuPage'});
