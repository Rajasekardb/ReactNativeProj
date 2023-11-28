import React from 'react';
import {View} from 'react-native';

import useStyleLayoutTest from './useStyleLayoutTest';
import HeaderTest from '../headerTest/HeaderTest';
import NavigationTest from '../navigationTest/NavigationTest';
import ContainerTest from '../containerTest/ContainerTest';

function LayoutTest({children, title}) {
  const styles = useStyleLayoutTest();
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <ContainerTest>
          <HeaderTest title={title} />
        </ContainerTest>
      </View>

      <View style={styles.main}>
        <ContainerTest full={true}>{children}</ContainerTest>
      </View>

      <View style={styles.navigation}>
        <ContainerTest>
          <NavigationTest />
        </ContainerTest>
      </View>
    </View>
  );
}

export default LayoutTest;
