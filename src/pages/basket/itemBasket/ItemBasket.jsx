import React from 'react';
import {Text, View} from 'react-native';

import useStyleItemBasket from './useStyleItemBasket';

function ItemBasket({title}) {
  const styles = useStyleItemBasket();
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
}

export default ItemBasket;
