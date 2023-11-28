import React from 'react';
import {View, ScrollView} from 'react-native';

import useStyleSectionCategories from './useStyleSectionCategories';
import TitleSection from '../../../components/titleSection/TitleSection';
import List from '../../../components/list/List';
import {CATEGORIES_ARRAY_DATA} from '../../../assets/data/categoriesData';
import TabIconItem from '../../../components/tabIconItem/TabIconItem';

function SectionCategories() {
  const styles = useStyleSectionCategories();
  return (
    <View style={styles.section}>
      <TitleSection title="Категории:" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.list}
        horizontal>
        <List
          data={CATEGORIES_ARRAY_DATA}
          Component={TabIconItem}
          iconSize={48}
        />
      </ScrollView>
    </View>
  );
}

export default SectionCategories;
