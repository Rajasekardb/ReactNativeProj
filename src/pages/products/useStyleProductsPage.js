import {StyleSheet} from 'react-native';

function useStyleProductsPage() {
  const styles = StyleSheet.create({
    page: {},

    list: {
      paddingBottom: 50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
      backgroundColor: 'red',
    },
  });

  return styles;
}

export default useStyleProductsPage;
