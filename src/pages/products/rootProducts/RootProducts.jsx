import React from 'react';
import {View} from 'react-native';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import SectionProducts from '../sectionProducts/SectionProducts';
import SectionCategories from '../sectionCategories/SectionCategories';

import useStyleRootProducts from './useStyleRootProducts';

function RootProducts() {
  const styles = useStyleRootProducts();

  return (
    <LayoutMain title="Продукты">
      <View style={styles.page}>
        <SectionCategories />
        <SectionProducts />
        {/* <Button title="Кнопка" /> */}
      </View>
    </LayoutMain>
  );
}

export default RootProducts;
