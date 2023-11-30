import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useStyleMenuItem from './useStyleMenuItem';

function MenuItem({name, title, onPress}) {
  const styles = useStyleMenuItem();

  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(name)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default MenuItem;
