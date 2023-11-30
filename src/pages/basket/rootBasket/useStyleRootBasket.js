import {StyleSheet} from 'react-native';

function useStyleRootBasket() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },

    list: {
      flex: 1,
      gap: 15,
    },
  });

  return styles;
}

export default useStyleRootBasket;
