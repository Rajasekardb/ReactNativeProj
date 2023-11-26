import React from 'react';
import {View, ScrollView} from 'react-native';

import productsStore from '../../store/productsStore';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import List from '../../components/list/List';
import ProductItem from './productItem/ProductItem';

import useStyleProductsPage from './useStyleProductsPage';

function ProductsPage() {
  const styles = useStyleProductsPage();
  const {productListAll} = productsStore;
  return (
    <LayoutMain title="Продукты">
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.list}>
            <List data={productListAll} Component={ProductItem} />
          </View>
        </ScrollView>
      </View>
    </LayoutMain>
  );
}

export default ProductsPage;
