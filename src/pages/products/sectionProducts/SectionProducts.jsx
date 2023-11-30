import React from 'react';
import {ScrollView, View} from 'react-native';

import productsStore from '../../../store/productsStore';

import TitleSection from '../../../components/titleSection/TitleSection';
import List from '../../../components/list/List';
import ProductItem from '../productItem/ProductItem';

import useStyleSectionProducts from './useStyleSectionProducts';

function SectionProducts() {
  const styles = useStyleSectionProducts();
  const {productList, category} = productsStore;
  return (
    <View style={styles.section}>
      <TitleSection title={`${category.title}:`} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.list}>
        <List data={productList} Component={ProductItem} />
      </ScrollView>
    </View>
  );
}

export default SectionProducts;
