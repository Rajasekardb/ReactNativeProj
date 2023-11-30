import React from 'react';
import {Image, Text, View} from 'react-native';

import productsStore from '../../../store/productsStore';
import useStyleItemBasket from './useStyleItemBasket';
import Price from '../../../components/price/Price';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import Counter from '../../../components/counter/Counter';

function ItemBasket({id, title, imgSrc, price, count}) {
  const styles = useStyleItemBasket();
  const {removeBasket} = productsStore;

  console.log(price * count);
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: imgSrc}} />

      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Price price={price * count} />
        <Counter count={count} />
      </View>

      <View style={styles.control}>
        <ButtonIcon iconName="minus" onPress={() => removeBasket(id)} />
      </View>
    </View>
  );
}

export default ItemBasket;
