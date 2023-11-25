import React from 'react';
import {Text, View} from 'react-native';

import LayoutHoc from '../../components/layoutHoc/LayoutHoc';

import useStyleTestPage from './useStyleTestPage';

function TestPage() {
  const styles = useStyleTestPage();
  return (
    <View style={styles.page}>
      <Text>TestPage</Text>
    </View>
  );
}

export default LayoutHoc(TestPage, {title: 'TestPage'});
