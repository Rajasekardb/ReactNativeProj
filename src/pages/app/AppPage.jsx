import React from 'react';
import {Text, View} from 'react-native';

import LayoutMain from '../../components/layoutMain/LayoutMain';

import useStyleAppPage from './useStyleAppPage';

function AppPage() {
  const styles = useStyleAppPage();
  return (
    <View style={styles.page}>
      <Text>AppPage</Text>
    </View>
  );
}

export default LayoutMain(AppPage, {title: 'AppPage'});
