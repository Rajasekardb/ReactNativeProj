import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';
function useStylePrice() {
  const styles = StyleSheet.create({
    box: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: COLORS.black,
      backgroundColor: COLORS.accent,
      elevation: 7,
    },

    price: {
      fontWeight: '800',
      color: COLORS.black,
    },
  });

  return styles;
}

export default useStylePrice;
