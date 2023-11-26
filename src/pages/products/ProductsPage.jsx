import React from 'react';
import {View, ScrollView} from 'react-native';
import LayoutMain from '../../components/layoutMain/LayoutMain';

import useStyleProductsPage from './useStyleProductsPage';
import CategoriesSection from './categoriesSection/CategoriesSection';
import ProductsSection from './productsSection/ProductsSection';
import Button from '../../components/button/Button';

function ProductsPage() {
  const styles = useStyleProductsPage();

  return (
    <LayoutMain title="Продукты">
      <View style={styles.page}>
        <CategoriesSection />
        <View style={styles.test}>
          <ProductsSection />
        </View>

        <Button title="Кнопка" />
      </View>
    </LayoutMain>
  );
}

export default ProductsPage;
