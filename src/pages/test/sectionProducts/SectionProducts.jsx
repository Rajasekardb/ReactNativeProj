import React from 'react';
import {ScrollView, View} from 'react-native';

import useStyleSectionProducts from './useStyleSectionProducts';
import TitleSection from '../../../components/titleSection/TitleSection';
import List from '../../../components/list/List';
import productsStore from '../../../store/productsStore';
import ProductItemTest from '../productItemTest/ProductItemTest';

function SectionProducts() {
  const styles = useStyleSectionProducts();
  const {productListAll} = productsStore;
  return (
    <View style={styles.section}>
      <TitleSection title="Продукты:" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.list}>
        <List data={productListAll} Component={ProductItemTest} />
      </ScrollView>
    </View>
  );
}

export default SectionProducts;
