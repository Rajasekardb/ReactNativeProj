import React from 'react';
import {View, ScrollView} from 'react-native';

import productsStore from '../../../store/productsStore';

import TitleSection from '../../../components/titleSection/TitleSection';
import List from '../../../components/list/List';
import ProductItem from '../productItem/ProductItem';

import useStyleProductsSection from './useStyleProductsSection';

function ProductsSection() {
  const styles = useStyleProductsSection();
  const {productListAll} = productsStore;
  return (
    <View style={styles.section}>
      <TitleSection title="Продукты:" />
      <ScrollView>
        <View style={styles.list}>
          <List data={productListAll} Component={ProductItem} />
        </View>
      </ScrollView>
    </View>
  );
}

export default ProductsSection;
