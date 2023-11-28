import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../header/Header';
import Container from '../container/Container';
import useStyleLayoutMain from './useStyleLayoutMain';
import Navigation from '../navigation/Navigation';

function LayoutMain({children, title}) {
  const styles = useStyleLayoutMain();
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.header}>
        <Container>
          <Header title={title} />
        </Container>
      </View>

      <View style={styles.main}>
        <Container full={true}>{children}</Container>
      </View>

      <View style={styles.navigation}>
        <Container>
          <Navigation />
        </Container>
      </View>
    </SafeAreaView>
  );
}

export default LayoutMain;
