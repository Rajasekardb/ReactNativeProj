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
  const goMenu = () => navigation.push(ROUTES_DATA.home.name);
  const goBasket = () => navigation.push(ROUTES_DATA.basket.name);
  const isShowBasket = route.name !== ROUTES_DATA.basket.name;
  return (
    <View style={styles.header}>
      <View style={styles.leftHub}>
        <ButtonIcon onPress={goMenu} iconName="bars" />
        <ButtonIcon onPress={goBack} iconName="arrow-left" />
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightHub}>
        {isShowBasket && (
          <ButtonIcon onPress={goBasket} iconName="basket-shopping" />
        )}
      </View>
    </View>
  );
}

export default Header;
