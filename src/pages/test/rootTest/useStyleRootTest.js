import {StyleSheet} from 'react-native';

function useStyleRootTest() {
  const styles = StyleSheet.create({
    // layout
    layout: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: 'black',
      // marginHorizontal: 8,
      // paddingHorizontal: 8,
    },

    header: {
      backgroundColor: 'gold',
    },

    main: {
      flex: 1,
      backgroundColor: 'orange',
    },

    footer: {
      backgroundColor: 'gold',
    },

    // Base
    text: {
      textAlign: 'center',
      color: 'red',
    },

    // Tabs
    scrollTabs: {},
    tabsList: {
      alignItems: 'flex-start',
      padding: 8,
      gap: 15,
    },

    // Products
    scrollProducts: {},
    productsList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 15,
      padding: 8,
    },
  });

  return styles;
}

export default useStyleRootTest;
