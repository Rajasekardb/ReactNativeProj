import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routesData} from '../../routes/routes-data';
import Container from '../container/Container';
import ButtonIcon from '../buttonIcon/ButtonIcon';

import useStyleHeader from './useStyleHeader';
function Header({title}) {
  const styles = useStyleHeader();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const goMenu = () => navigation.push(routesData.home.name);

  return (
    <View style={styles.header}>
      <Container>
        <View style={styles.inner}>
          <ButtonIcon onPress={goBack} iconName="arrow-left" />
          <Text style={styles.title}>{title}</Text>
          <ButtonIcon onPress={goMenu} iconName="bars" />
        </View>
      </Container>
    </View>
  );
}

export default Header;
