import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleFooterBasket() {
  const styles = StyleSheet.create({
    footer: {
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 50,
      borderRadius: 5,
      padding: 8,
      backgroundColor: COLORS.white,
    },
  });

  return styles;
}

export default useStyleFooterBasket;
