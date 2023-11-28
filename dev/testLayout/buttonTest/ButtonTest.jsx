import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import useStyleButtonTest from './useStyleButtonTest';

function ButtonTest({title, onPress}) {
  const styles = useStyleButtonTest();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonTest;
