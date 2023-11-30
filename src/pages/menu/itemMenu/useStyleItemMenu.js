import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleItemMenu() {
  const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      backgroundColor: COLORS.accent,
      borderRadius: 10,
      elevation: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: '800',
      textTransform: 'uppercase',
      color: COLORS.black,
    },
  });

  return styles;
}

export default useStyleItemMenu;
