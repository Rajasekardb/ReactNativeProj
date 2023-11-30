import React from 'react';
import {View} from 'react-native';

import productsStore from '../../../store/productsStore';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import ItemBasket from '../itemBasket/ItemBasket';
import useStyleRootBasket from './useStyleRootBasket';

function RootBasket() {
  const styles = useStyleRootBasket();
  const {basketsList} = productsStore;
  return (
    <LayoutMain title="RootBasket">
      <View style={styles.page}>
        <View style={styles.list}>
          <List data={basketsList} Component={ItemBasket} />
        </View>
      </View>
    </LayoutMain>
  );
}

export default RootBasket;
