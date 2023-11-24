import React from 'react';
import {Text, View} from 'react-native';

import useStyleContainer from './useStyleContainer';

function Container({children}) {
  const styles = useStyleContainer();
  return <View style={styles.container}>{children}</View>;
}

export default Container;
