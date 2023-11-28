import React from 'react';
import {Text, View} from 'react-native';

import useStyleSectionProducts from './useStyleSectionProducts';

function SectionProducts() {
  const styles = useStyleSectionProducts();
  return (
    <View>
      <Text>SectionProducts</Text>
    </View>
  );
}

export default SectionProducts;
