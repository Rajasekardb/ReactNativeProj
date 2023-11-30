import React from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import productsStore from '../../../store/productsStore';

import {ROUTES_DATA} from '../../../routes/routes-data';
import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import ItemBasket from '../itemBasket/ItemBasket';
import Price from '../../../components/price/Price';
import Button from '../../../components/button/Button';

import useStyleRootBasket from './useStyleRootBasket';

function RootBasket() {
  const navigation = useNavigation();
  const styles = useStyleRootBasket();
  const {basketsList, fullPriceBasket, clearBasket} = productsStore;

  const handlerOrder = () => {
    clearBasket();
    navigation.push(ROUTES_DATA.products.name);
  };
  return (
    <LayoutMain title="RootBasket">
      <View style={styles.page}>
        <ScrollView contentContainerStyle={styles.list}>
          <List data={basketsList} Component={ItemBasket} />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Price price={fullPriceBasket} />
        <Button title="Оформить" onPress={handlerOrder} />
      </View>
    </LayoutMain>
  );
}

export default RootBasket;
