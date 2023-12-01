import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES_DATA} from '../../../routes/routes-data';
import productsStore from '../../../store/productsStore';

import Price from '../../../components/price/Price';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import Counter from '../../../components/counter/Counter';

import useStyleItemBasket from './useStyleItemBasket';

function ItemBasket({id, title, imgCover, price, count}) {
  const styles = useStyleItemBasket();
  const {removeBasket, incrementProduct, decrementProduct} = productsStore;
  const navigation = useNavigation();
  const handlerPress = () =>
    navigation.push(ROUTES_DATA.productDetails.name, {id});

  return (
    <TouchableOpacity style={styles.item} onPress={handlerPress}>
      <Image style={styles.image} source={{uri: imgCover}} />

      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Price price={price * count} />
        <Counter
          count={count}
          onDecrement={() => decrementProduct(id)}
          onIncrement={() => incrementProduct(id)}
        />
      </View>

      <View style={styles.control}>
        <ButtonIcon iconName="minus" onPress={() => removeBasket(id)} />
      </View>
    </TouchableOpacity>
  );
}

export default ItemBasket;
