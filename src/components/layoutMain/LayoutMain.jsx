import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from '../container/Container';
import useStyleLayoutMain from './useStyleLayoutMain';

function LayoutMain({children, title}) {
  const styles = useStyleLayoutMain();
  return (
    <SafeAreaView style={styles.layout}>
      <Header title={title} />

      <View style={styles.main}>
        <Container>{children}</Container>
      </View>

      <Footer />
    </SafeAreaView>
  );
}

export default LayoutMain;
