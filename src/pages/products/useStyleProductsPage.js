import {StyleSheet} from 'react-native';

function useStyleProductsPage() {
  const styles = StyleSheet.create({
    page: {
      height: '100%',
      // backgroundColor: 'green',
    },

    productSection: {},

    scroll: {
      flex: 1,
      backgroundColor: 'red',
    },

    productList: {
      marginVertical: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
    },
  });

  return styles;
}

export default useStyleProductsPage;
