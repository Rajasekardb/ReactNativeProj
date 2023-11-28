import React from 'react';
import {View} from 'react-native';

import useStyleContainerTest from './useStyleContainerTest';

function Container({children}) {
  const styles = useStyleContainerTest();
  return <View style={styles.container}>{children}</View>;
}

export default Container;
