import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import useStyleRootTest from './useStyleRootTest';
import TitleSection from '../../../components/titleSection/TitleSection';
import List from '../../../components/list/List';
import {CATEGORIES_ARRAY_DATA} from '../../../assets/data/categoriesData';
import TabIconItem from '../../../components/tabIconItem/TabIconItem';
import SectionProducts from '../sectionProducts/SectionProducts';
import SectionCategories from '../sectionСategories/SectionCategories';

function RootTest() {
  const styles = useStyleRootTest();

  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>Main</Text>
        <SectionCategories />
        <SectionProducts />
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
}

export default RootTest;
