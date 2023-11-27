import React from 'react';
import {View, ScrollView} from 'react-native';
import LayoutMain from '../../components/layoutMain/LayoutMain';

import {CATEGORIES_ARRAY_DATA} from '../../assets/data/categoriesData';
import productsStore from '../../store/productsStore';
import TitleSection from '../../components/titleSection/TitleSection';
import Button from '../../components/button/Button';
import List from '../../components/list/List';
import ProductItem from './productItem/ProductItem';

import useStyleProductsPage from './useStyleProductsPage';
import TabIconItem from '../../components/tabIconItem/TabIconItem';
import COLORS from '../../assets/styles/stylesColors';

function ProductsPage() {
  const styles = useStyleProductsPage();
  const {productListAll} = productsStore;

  return (
    <LayoutMain title="Продукты">
      <View style={styles.page}>
        <TitleSection title="Категории:" />
        <ScrollView style={styles.scrollTabs} horizontal>
          <View style={styles.tabsList}>
            <List
              data={CATEGORIES_ARRAY_DATA}
              Component={TabIconItem}
              iconSize={48}
            />
          </View>
        </ScrollView>

        <TitleSection title="Продукты:" />
        <ScrollView style={styles.scrollProducts}>
          <View style={styles.productsList}>
            <List data={productListAll} Component={ProductItem} />
          </View>
        </ScrollView>

        <Button title="Кнопка" />
      </View>
    </LayoutMain>
  );
}

export default ProductsPage;
