import React from 'react';
import {View, ScrollView} from 'react-native';
import LayoutMain from '../../components/layoutMain/LayoutMain';

import productsStore from '../../store/productsStore';
import TitleSection from '../../components/titleSection/TitleSection';
import Button from '../../components/button/Button';
import List from '../../components/list/List';
import ProductItem from './productItem/ProductItem';

import useStyleProductsPage from './useStyleProductsPage';

function ProductsPage() {
  const styles = useStyleProductsPage();
  const {productListAll} = productsStore;

  return (
    <LayoutMain title="Продукты">
      <View style={styles.page}>
        <TitleSection title="Категории:" />
        <TitleSection title="Продукты:" />

        <ScrollView style={styles.scroll}>
          <View style={styles.productList}>
            <List data={productListAll} Component={ProductItem} />
          </View>
        </ScrollView>

        <Button title="Кнопка" />
      </View>
    </LayoutMain>
  );
}

export default ProductsPage;
