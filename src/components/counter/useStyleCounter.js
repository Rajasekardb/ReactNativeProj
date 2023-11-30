import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleCounter() {
  const styles = StyleSheet.create({
    box: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      borderRadius: 50,
      borderWidth: 1,
      borderColor: COLORS.black,
      backgroundColor: COLORS.accent,
      elevation: 7,
    },

    count: {
      paddingHorizontal: 8,
      fontSize: 18,
      fontWeight: '800',
    },

    button: {
      borderColor: COLORS.black,
      paddingHorizontal: 5,
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
