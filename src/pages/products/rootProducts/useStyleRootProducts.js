import {StyleSheet} from 'react-native';

function useStyleRootProducts() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      // backgroundColor: 'green',
    },

    // scrollTabs: {
    //   flex: 1,
    //   maxHeight: 100,
    //   backgroundColor: 'green',
    // },

    tabsList: {
      backgroundColor: 'purple',
      margin: 8,
      gap: 15,
    },

    scrollProducts: {
      // flex: 1,
      backgroundColor: 'red',
    },

    productsList: {
      margin: 8,
      marginVertical: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 15,
    },
  });

  return styles;
}

export default useStyleRootProducts;
