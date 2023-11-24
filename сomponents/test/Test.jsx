import React from 'react';
import {Text, View} from 'react-native';

import useStyleTest from './useStyleTest';

function Test() {
  const styles = useStyleTest();
  return (
    <View>
      <Text style={styles.test}>Test</Text>
    </View>
  );
}

export default Test;
