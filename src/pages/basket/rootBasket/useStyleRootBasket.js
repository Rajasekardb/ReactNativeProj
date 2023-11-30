import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

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
