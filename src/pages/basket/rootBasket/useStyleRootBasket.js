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
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 50,
      borderRadius: 5,
      padding: 8,
      backgroundColor: COLORS.bg_light,
    },

    empty: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
    },

    emptyTitle: {
      fontWeight: '800',
      fontSize: 64,
    },
  });

  return styles;
}

export default useStyleRootBasket;
