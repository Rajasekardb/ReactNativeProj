import {StyleSheet} from 'react-native';

function useStyleRootBasket() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },

    list: {
      paddingVertical: 8,
      gap: 15,
    },
  });

  return styles;
}

export default useStyleRootBasket;
