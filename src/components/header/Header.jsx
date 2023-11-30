import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {ROUTES_DATA} from '../../routes/routes-data';
import ButtonIcon from '../buttonIcon/ButtonIcon';

import useStyleHeader from './useStyleHeader';

function Header({title}) {
  const styles = useStyleHeader();
  const navigation = useNavigation();
  const route = useRoute();
  const goBack = () => navigation.goBack();
  const goBasket = () => navigation.push(ROUTES_DATA.basket.name);
  const isShowBasket = route.name !== ROUTES_DATA.basket.name;

  return (
    <View style={styles.header}>
      <ButtonIcon onPress={goBack} iconName="arrow-left" />

      <Text style={styles.title}>{title}</Text>

      {isShowBasket && (
        <ButtonIcon onPress={goBasket} iconName="basket-shopping" />
      )}
    </View>
  );
}

export default Header;
