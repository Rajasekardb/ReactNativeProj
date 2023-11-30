import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useStyleItemMenu from './useStyleItemMenu';

function ItemMenu({name, title, onPress}) {
  const styles = useStyleItemMenu();

  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(name)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ItemMenu;
