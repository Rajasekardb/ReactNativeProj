import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleCounter from './useStyleCounter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function Counter({count, onIncrement, onDecrement}) {
  const styles = useStyleCounter();

  return (
    <View style={styles.box}>
      <View style={[styles.increment, styles.button]}>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesomeIcon icon="minus" />
        </TouchableOpacity>
      </View>

      <Text style={styles.count}>{count}</Text>

      <View style={[styles.decrement, styles.button]}>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesomeIcon icon="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default observer(Counter);
