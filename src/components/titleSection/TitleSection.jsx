import React from 'react';
import {Text, View} from 'react-native';

import useStyleTitleSection from './useStyleTitleSection';

function TitleSection({title}) {
  const styles = useStyleTitleSection();
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default TitleSection;
