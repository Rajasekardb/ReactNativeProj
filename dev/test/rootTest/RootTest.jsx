import React from 'react';
import {View} from 'react-native';
import useStyleRootTest from './useStyleRootTest';
import SectionProducts from '../sectionProducts/SectionProducts';
import SectionCategories from '../sectionCategories/SectionCategories';

import ButtonTest from '../buttonTest/ButtonTest';
import LayoutTest from '../layoutTest/LayoutTest';

function RootTest() {
  const styles = useStyleRootTest();

  return (
    <LayoutTest>
      <View style={styles.page}>
        <SectionCategories />
        <SectionProducts />
        <ButtonTest title="Кнопка" />
      </View>
    </LayoutTest>
  );
}

export default RootTest;
