import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useStyleButton from './useStyleButton';

function Button({title, onPress}) {
  const styles = useStyleButton();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
