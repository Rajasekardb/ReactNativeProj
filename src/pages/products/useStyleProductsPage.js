import {StyleSheet} from 'react-native';

function useStyleProductsPage() {
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
      flexDirection: 'row',
      margin: 15,
      gap: 15,
    },

    // scrollProducts: {
    //   flex: 1,
    //   backgroundColor: 'red',
    // },

    productsList: {
      marginVertical: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
    },
  });

  return styles;
}

export default useStyleProductsPage;
