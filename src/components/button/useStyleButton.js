import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleButton() {
  const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      backgroundColor: COLORS.accent,
      borderWidth: 1,
      borderColor: COLORS.black,
      borderRadius: 10,
      elevation: 10,
    },

    title: {
      fontSize: 18,
      fontWeight: '600',
      textTransform: 'uppercase',
      color: COLORS.black,
    },
  });

  return styles;
}

export default useStyleButton;
