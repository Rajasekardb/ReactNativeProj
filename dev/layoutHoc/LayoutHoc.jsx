import React from 'react';
import {View} from 'react-native';

import Container from '../../src/components/container/Container';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';

import useStyleLayoutHoc from './useStyleLayoutHoc';
import {SafeAreaView} from 'react-native-safe-area-context';

function LayoutHoc(Page, params) {
  const styles = useStyleLayoutHoc();

  return function (props) {
    return (
      <SafeAreaView style={styles.layout}>
        <Header {...props} title={params.title} />

        <View style={styles.main}>
          <Container>
            <Page {...props} />
          </Container>
        </View>

        <Footer />
      </SafeAreaView>
    );
  };
}

export default LayoutHoc;
