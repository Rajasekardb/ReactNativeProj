import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

import productsStore from '../../../store/productsStore';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import EmptyBasket from '../sectionEmpty/SectionEmpty';
import SectionContent from '../sectionContent/SectionContent';

import useStyleRootBasket from './useStyleRootBasket';

function RootBasket() {
  const styles = useStyleRootBasket();
  const {countItemsBasket} = productsStore;

  return (
    <LayoutMain title="Корзина">
      <View style={styles.page}>
        {countItemsBasket > 0 && <SectionContent />}
        {countItemsBasket === 0 && <EmptyBasket />}
      </View>
    </LayoutMain>
  );
}

export default observer(RootBasket);
