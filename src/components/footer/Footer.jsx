import React from 'react';
import {Text, View} from 'react-native';

import Container from '../container/Container';
import useStyleFooter from './useStyleFooter';

function Footer() {
  const styles = useStyleFooter();
  return (
    <View style={styles.footer}>
      <Container>
        <Text>Footer</Text>
      </Container>
    </View>
  );
}

export default Footer;
