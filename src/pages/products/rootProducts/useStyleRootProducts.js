import {StyleSheet} from 'react-native';

function useStyleRootProducts() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'space-between',
      // backgroundColor: 'green',
    },
  });

  return styles;
}

export default useStyleRootProducts;
