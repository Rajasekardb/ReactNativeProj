import {StyleSheet} from 'react-native';

function useStyleProductsPage() {
  const styles = StyleSheet.create({
    page: {
      height: '100%',
      // backgroundColor: 'green',
    },

    productSection: {},

    productList: {
      flex: 1,
      marginVertical: 15,
      flexWrap: 'wrap',
      gap: 20,
      backgroundColor: 'red',
    },
  });

  return styles;
}

export default useStyleProductsPage;
