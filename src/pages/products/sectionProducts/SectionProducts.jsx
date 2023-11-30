import React from 'react';
import {ScrollView, View} from 'react-native';

import productsStore from '../../../store/productsStore';

import TitleSection from '../../../components/titleSection/TitleSection';
import List from '../../../components/list/List';
import ItemProduct from '../itemProduct/ItemProduct';

import useStyleSectionProducts from './useStyleSectionProducts';

function SectionProducts() {
  const styles = useStyleSectionProducts();
  const {productList, category} = productsStore;
  return (
    <View style={styles.section}>
      <TitleSection title={`${category.title}:`} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.list}>
        <List data={productList} Component={ItemProduct} />
      </ScrollView>
    </View>
  );
}

export default SectionProducts;
