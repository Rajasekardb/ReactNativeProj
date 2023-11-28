import React from 'react';
import {Text, View} from 'react-native';
import useStyleRootTest from './useStyleRootTest';
import SectionProducts from '../sectionProducts/SectionProducts';
import SectionCategories from '../sectionCategories/SectionCategories';
import NavigationTest from '../navigationTest/NavigationTest';
import HeaderTest from '../headerTest/HeaderTest';

function RootTest() {
  const styles = useStyleRootTest();

  return (
    <View style={styles.layout}>
      <HeaderTest />
      {/* <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View> */}

      <View style={styles.main}>
        <Text style={styles.text}>Main</Text>
        <SectionCategories />
        <SectionProducts />
      </View>

      <NavigationTest />

      {/* <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View> */}
    </View>
  );
}

export default RootTest;
