import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import productsStore from '../../../store/productsStore';

import {ROUTES_DATA} from '../../../routes/routes-data';
import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import ItemBasket from '../itemBasket/ItemBasket';
import Price from '../../../components/price/Price';
import Button from '../../../components/button/Button';

import useStyleRootBasket from './useStyleRootBasket';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import COLORS from '../../../assets/styles/stylesColors';

function RootBasket() {
  const navigation = useNavigation();
  const styles = useStyleRootBasket();
  const {basketsList, fullPriceBasket, clearBasket} = productsStore;
  const goProducts = () => navigation.push(ROUTES_DATA.products.name);
  const handlerOrder = () => {
    clearBasket();
    navigation.push(ROUTES_DATA.products.name);
  };

  return (
    <LayoutMain title="Корзина">
      <View style={styles.page}>
        {basketsList.length > 0 && (
          <>
            <ScrollView contentContainerStyle={styles.list}>
              <List data={basketsList} Component={ItemBasket} />
            </ScrollView>

            <View style={styles.footer}>
              <Price price={fullPriceBasket} />
              <Button title="Оформить" onPress={handlerOrder} />
            </View>
          </>
        )}

        {basketsList.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Пусто!</Text>
            <FontAwesomeIcon
              style={styles.empty}
              icon="ban"
              size={200}
              color={COLORS.accent}
            />
            <Button title="Добавить" onPress={goProducts} />
          </View>
        )}
      </View>
    </LayoutMain>
  );
}

export default RootBasket;
