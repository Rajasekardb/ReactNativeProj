import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useStyleItemMenu from './useStyleItemMenu';

function ItemMenu({name, title}) {
  const styles = useStyleItemMenu();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.push(name)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ItemMenu;
