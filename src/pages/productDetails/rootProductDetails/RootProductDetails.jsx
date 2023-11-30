import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import productsStore from '../../../store/productsStore';
import LayoutMain from '../../../components/layoutMain/LayoutMain';
import useStyleRootProductDetails from './useStyleRootProductDetails';

function RootProductDetails() {
  const styles = useStyleRootProductDetails();
  const route = useRoute();
  const id = route.params.id;
  const {findProduct} = productsStore;
  const product = findProduct(id);
  return (
    <LayoutMain title="RootProductDetails">
      <View style={styles.page}>
        <Text>{product.title}</Text>
      </View>
    </LayoutMain>
  );
}

export default RootProductDetails;
