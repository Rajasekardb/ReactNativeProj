import React from 'react';
import {Text, View} from 'react-native';

import LayoutMain from '../../components/layoutMain/LayoutMain';

import useStyleTestPage from './useStyleTestPage';

function TestPage() {
  const styles = useStyleTestPage();
  return (
    <View style={styles.page}>
      <Text>TestPage</Text>
    </View>
  );
}

export default LayoutMain(TestPage, {title: 'TestPage'});
