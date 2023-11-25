import React from 'react';
import {Text, View} from 'react-native';

import useStyleHeader from './useStyleHeader';

import Container from '../container/Container';
function Header({route, navigation, title}) {
  const styles = useStyleHeader();

  // console.log(route);
  // console.log(navigation);

  return (
    <View style={styles.header}>
      <Container>
        <Text>{title}</Text>
      </Container>
    </View>
  );
}

export default Header;
