import React from 'react';
import {View} from 'react-native';
import productsStore from '../../../store/productsStore';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import EmptyBasket from '../sectionEmpty/SectionEmpty';
import SectionContent from '../sectionContent/SectionContent';

import useStyleRootBasket from './useStyleRootBasket';

function RootBasket() {
  const styles = useStyleRootBasket();
  const {basketsList} = productsStore;

  return (
    <LayoutMain title="Корзина">
      <View style={styles.page}>
        {basketsList.length > 0 && <SectionContent />}
        {basketsList.length === 0 && <EmptyBasket />}
      </View>
    </LayoutMain>
  );
}

export default RootBasket;
