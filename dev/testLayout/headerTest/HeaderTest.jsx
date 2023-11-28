import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES_DATA} from '../../../routes/routes-data';

import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

import useStyleHeaderTest from './useStyleHeaderTest';
function HeaderTest({title}) {
  const styles = useStyleHeaderTest();
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

export default HeaderTest;
