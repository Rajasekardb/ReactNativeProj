import React from 'react';
import {View, ScrollView} from 'react-native';

import productsStore from '../../../store/productsStore';
import List from '../../../components/list/List';
import ItemBasket from '../itemBasket/ItemBasket';
import FooterBasket from '../footerBasket/FooterBasket';

import useStyleSectionContent from './useStyleSectionContent';

function SectionContent() {
  const styles = useStyleSectionContent();
  const {basketsList} = productsStore;

  return (
    <View style={styles.section}>
      <ScrollView contentContainerStyle={styles.list}>
        <List data={basketsList} Component={ItemBasket} />
      </ScrollView>
      <FooterBasket />
    </View>
  );
}

export default SectionContent;
