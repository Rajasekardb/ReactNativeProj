import React from 'react';
import {View} from 'react-native';

import useStyleContainer from './useStyleContainer';

function Container({children, full = false}) {
  const styles = useStyleContainer(full);
  return <View style={styles.container}>{children}</View>;
}

export default Container;
