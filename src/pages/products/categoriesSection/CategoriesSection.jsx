import React from 'react';
import {Text, View} from 'react-native';

import TitleSection from '../../../components/titleSection/TitleSection';
import useStyleCategoriesSection from './useStyleCategoriesSection';

function CategoriesSection() {
  const styles = useStyleCategoriesSection();
  return (
    <View style={styles.section}>
      <TitleSection title="Категории:" />
      <Text> test</Text>
    </View>
  );
}

export default CategoriesSection;
