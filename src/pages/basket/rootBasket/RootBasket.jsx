import React from 'react';
import {View, ScrollView} from 'react-native';

import productsStore from '../../../store/productsStore';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import ItemBasket from '../itemBasket/ItemBasket';
import useStyleRootBasket from './useStyleRootBasket';
import Price from '../../../components/price/Price';
import Button from '../../../components/button/Button';

function RootBasket() {
  const styles = useStyleRootBasket();
  const {basketsList, fullPriceBasket} = productsStore;

  return (
    <LayoutMain title="RootBasket">
      <View style={styles.page}>
        <ScrollView contentContainerStyle={styles.list}>
          <List data={basketsList} Component={ItemBasket} />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Price price={fullPriceBasket} />
        <Button title="Оформить" />
      </View>
    </LayoutMain>
  );
}

export default RootBasket;
