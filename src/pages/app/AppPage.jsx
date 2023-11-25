import React from 'react';
import {Text, View} from 'react-native';

import LayoutHoc from '../../components/layoutHoc/LayoutHoc';

import useStyleAppPage from './useStyleAppPage';

function AppPage() {
  const styles = useStyleAppPage();
  return (
    <View style={styles.page}>
      <Text>AppPage</Text>
    </View>
  );
}

export default LayoutHoc(AppPage, {title: 'AppPage'});
