import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES_DATA} from '../../../routes/routes-data';
import productsStore from '../../../store/productsStore';

import Price from '../../../components/price/Price';
import Button from '../../../components/button/Button';

import useStyleFooterBasket from './useStyleFooterBasket';

function FooterBasket() {
  const styles = useStyleFooterBasket();
  const navigation = useNavigation();
  const {fullPriceBasket, clearBasket} = productsStore;

  console.log(fullPriceBasket);

  const handlerOrder = () => {
    clearBasket();
    navigation.push(ROUTES_DATA.products.name);
  };

  return (
    <View style={styles.footer}>
      <Price price={fullPriceBasket} />
      <Button title="Оформить" onPress={handlerOrder} />
    </View>
  );
}

export default FooterBasket;
