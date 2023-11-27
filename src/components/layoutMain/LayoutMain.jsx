import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from '../container/Container';
import useStyleLayoutMain from './useStyleLayoutMain';
import Navigation from '../navigation/Navigation';

function LayoutMain({children, title}) {
  const styles = useStyleLayoutMain();
  return (
    <SafeAreaView style={styles.layout}>
      <Header title={title} />

      <View style={styles.main}>
        <Container>{children}</Container>
      </View>

      <Navigation />
    </SafeAreaView>
  );
}

export default LayoutMain;
