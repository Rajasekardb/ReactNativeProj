import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import useStyleButton from './useStyleButton';

function Button({title, onPress}) {
  const styles = useStyleButton();
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
