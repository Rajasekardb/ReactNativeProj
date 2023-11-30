import React from 'react';
import {Text, View, Image} from 'react-native';

import productsStore from '../../../store/productsStore';
import Price from '../../../components/price/Price';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

import useStyleProductItem from './useStyleProductItem';

function ProductItem({
  id,
  title,
  desc,
  imgSrc,
  price,
  count,
  category,
  isBasket,
}) {
  const styles = useStyleProductItem();
  const {toggleBasket} = productsStore;
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.main}>
        <Image style={styles.image} source={{uri: imgSrc}} />
        <View style={styles.mainInner}>
          <Text style={styles.desc} numberOfLines={4}>
            {desc}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Price price={price} />
        <ButtonIcon
          iconName={isBasket ? 'minus' : 'plus'}
          onPress={() => toggleBasket(id)}
        />
      </View>
    </View>
  );
}

export default ProductItem;
