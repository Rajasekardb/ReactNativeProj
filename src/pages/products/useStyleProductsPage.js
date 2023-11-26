import {StyleSheet} from 'react-native';

function useStyleProductsPage() {
  const styles = StyleSheet.create({
    page: {
      height: '100%',
      // backgroundColor: 'green',
    },

    test: {
      height: '73%',
      backgroundColor: 'violet',
    },
  });

  return styles;
}

export default useStyleProductsPage;
