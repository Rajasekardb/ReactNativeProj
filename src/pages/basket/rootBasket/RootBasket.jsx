import React from 'react';
import {View, ScrollView} from 'react-native';
import productsStore from '../../../store/productsStore';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import ItemBasket from '../itemBasket/ItemBasket';

import useStyleRootBasket from './useStyleRootBasket';

import FooterBasket from '../footerBasket/FooterBasket';
import EmptyBasket from '../sectionEmpty/SectionEmpty';

function RootBasket() {
  const styles = useStyleRootBasket();
  const {basketsList} = productsStore;

  return (
    <LayoutMain title="Корзина">
      <View style={styles.page}>
        {basketsList.length > 0 && (
          <>
            <ScrollView contentContainerStyle={styles.list}>
              <List data={basketsList} Component={ItemBasket} />
            </ScrollView>
            <FooterBasket />
          </>
        )}

        {basketsList.length === 0 && <EmptyBasket />}
      </View>
    </LayoutMain>
  );
}

export default RootBasket;
