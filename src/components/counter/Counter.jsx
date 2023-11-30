import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import useStyleCounter from './useStyleCounter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function Counter({count, onPress}) {
  const styles = useStyleCounter();
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={[styles.increment, styles.button]}
        onPress={onPress}>
        <FontAwesomeIcon icon="minus" />
      </TouchableOpacity>

      <Text>{count}</Text>

      <TouchableOpacity
        style={[styles.decrement, styles.button]}
        onPress={onPress}>
        <FontAwesomeIcon icon="plus" />
      </TouchableOpacity>
    </View>
  );
}

export default Counter;
