import React from 'react';
import {View} from 'react-native';

import Container from '../container/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import useStyleLayoutMain from './useStyleLayoutMain';
import {SafeAreaView} from 'react-native-safe-area-context';

function LayoutMain(Page, params) {
  const styles = useStyleLayoutMain();

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

export default LayoutMain;
