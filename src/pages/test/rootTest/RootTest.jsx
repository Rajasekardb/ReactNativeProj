import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import useStyleRootTest from './useStyleRootTest';
import TitleSection from '../../../components/titleSection/TitleSection';
import List from '../../../components/list/List';
import {CATEGORIES_ARRAY_DATA} from '../../../assets/data/categoriesData';
import TabIconItem from '../../../components/tabIconItem/TabIconItem';
import productsStore from '../../../store/productsStore';
import ProductItemTest from '../productItemTest/ProductItemTest';

function RootTest() {
  const styles = useStyleRootTest();
  const {productListAll} = productsStore;
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>Main</Text>
        <TitleSection title="Категории:" />
        <ScrollView
          style={styles.scrollTabs}
          contentContainerStyle={styles.tabsList}
          horizontal>
          <List
            data={CATEGORIES_ARRAY_DATA}
            Component={TabIconItem}
            iconSize={48}
          />
        </ScrollView>

        <TitleSection title="Продукты:" />
        <ScrollView
          style={styles.scrollProducts}
          contentContainerStyle={styles.productsList}>
          <List data={productListAll} Component={ProductItemTest} />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
}

export default RootTest;
