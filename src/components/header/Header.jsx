import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES_DATA} from '../../routes/routes-data';
import ButtonIcon from '../buttonIcon/ButtonIcon';

import useStyleHeader from './useStyleHeader';

function Header({title}) {
  const styles = useStyleHeader();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const goMenu = () => navigation.push(ROUTES_DATA.home.name);

  return (
    <View style={styles.header}>
      <ButtonIcon onPress={goBack} iconName="arrow-left" />
      <Text style={styles.title}>{title}</Text>
      <ButtonIcon onPress={goMenu} iconName="bars" />
    </View>
  );
}

export default Header;
