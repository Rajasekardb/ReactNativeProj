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

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 50,
      borderRadius: 5,
      padding: 8,
      backgroundColor: COLORS.bg_light,
    },
  });

  return styles;
}

export default useStyleRootBasket;
