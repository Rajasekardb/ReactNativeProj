import React from 'react';
import {View} from 'react-native';

import Container from '../container/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';

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
