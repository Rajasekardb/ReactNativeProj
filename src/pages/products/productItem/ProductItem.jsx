import React from 'react';
import {Text, View, Image} from 'react-native';

import useStyleProductItem from './useStyleProductItem';
import Price from '../../../components/price/Price';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

function ProductItem({id, title, desc, imgSrc, price, count, category}) {
  const styles = useStyleProductItem();
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.main}>
        <Image style={styles.image} source={{uri: imgSrc}} />
        <View style={styles.mainInner}>
          <Text style={styles.desc} numberOfLines={5}>
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

export default ProductItem;
