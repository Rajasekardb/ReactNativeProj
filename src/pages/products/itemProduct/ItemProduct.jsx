import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import productsStore from '../../../store/productsStore';
import Price from '../../../components/price/Price';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

import useStyleItemProduct from './useStyleItemProduct';
import {ROUTES_DATA} from '../../../routes/routes-data';

function ItemProduct({
  id,
  title,
  desc,
  imgSrc,
  price,
  count,
  category,
  isBasket,
}) {
  const styles = useStyleItemProduct();
  const {toggleBasket} = productsStore;
  const navigation = useNavigation();
  const handlerPress = () =>
    navigation.push(ROUTES_DATA.productDetails.name, {id});

  return (
    <TouchableOpacity style={styles.item} onPress={handlerPress}>
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
    </TouchableOpacity>
  );
}

export default ItemProduct;
