import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleCounter() {
  const styles = StyleSheet.create({
    box: {
      width: 200,
      flexDirection: 'row',
      justifyContent: 'space-between',

      borderRadius: 50,
      borderWidth: 1,
      borderColor: COLORS.black,
      backgroundColor: COLORS.accent,
      elevation: 7,
    },

    button: {
      paddingHorizontal: 8,
      borderColor: COLORS.black,
    },

    increment: {
      borderRightWidth: 1,
    },

    decrement: {
      borderLeftWidth: 1,
    },
  });

  return styles;
}

export default useStyleCounter;
