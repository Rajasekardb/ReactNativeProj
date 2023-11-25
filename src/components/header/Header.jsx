import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useStyleHeader from './useStyleHeader';

import Container from '../container/Container';
import ButtonIcon from '../buttonIcon/ButtonIcon';
function Header({title}) {
  const styles = useStyleHeader();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.header}>
      <Container>
        <View style={styles.inner}>
          <ButtonIcon onPress={goBack} />
          <Text style={styles.title}>{title}</Text>
          <ButtonIcon onPress={goBack} />
        </View>
      </Container>
    </View>
  );
}

export default Header;
