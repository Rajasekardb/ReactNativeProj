import React from 'react';
import {Text, View} from 'react-native';

import useStylePrice from './useStylePrice';

function Price({price}) {
  const styles = useStylePrice();
  return (
    <View style={styles.box}>
      <Text style={styles.price}>{price} ₽</Text>
    </View>
  );
}

export default Price;
