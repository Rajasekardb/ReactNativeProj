import React from 'react';
import {Text, View} from 'react-native';

import useStyleCounter from './useStyleCounter';

function Counter({count}) {
  const styles = useStyleCounter();
  return (
    <View style={styles.box}>
      <Text>{count}</Text>
    </View>
  );
}

export default Counter;
