import React from 'react';
import {Text, View} from 'react-native';

import useStyleHeader from './useStyleHeader';

import Container from '../container/Container';
function Header() {
  const styles = useStyleHeader();

  return (
    <View style={styles.header}>
      <Container>
        <Text>Header222</Text>
      </Container>
    </View>
  );
}

export default Header;
