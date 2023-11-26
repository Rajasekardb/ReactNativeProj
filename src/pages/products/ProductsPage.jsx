import React from 'react';
import {Text, View} from 'react-native';

import LayoutMain from '../../components/layoutMain/LayoutMain';
import useStyleProductsPage from './useStyleProductsPage';

function ProductsPage() {
  const styles = useStyleProductsPage();
  return (
    <LayoutMain title="Продукты">
      <View style={styles.page}>
        <Text>ProductsPage</Text>
      </View>
    </LayoutMain>
  );
}

export default ProductsPage;
