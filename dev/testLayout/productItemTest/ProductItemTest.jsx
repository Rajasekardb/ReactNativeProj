import React from 'react';
import {Text, View, Image} from 'react-native';

import useStyleProductItemTest from './useStyleProductItemTest';
import Price from '../../../components/price/Price';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

function ProductItemTest({id, title, desc, imgCover, price, count, category}) {
  const styles = useStyleProductItemTest();
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.main}>
        <Image style={styles.image} source={{uri: imgCover}} />
        <View style={styles.mainInner}>
          <Text style={styles.desc} numberOfLines={4}>
            {desc}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Price price={price} />
        <ButtonIcon iconName="plus" />
      </View>
    </View>
  );
}

export default ProductItemTest;
