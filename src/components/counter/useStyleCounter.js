import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleCounter() {
  const styles = StyleSheet.create({
    box: {
      justifyContent: 'center',
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: COLORS.black,
      backgroundColor: COLORS.accent,
      elevation: 7,
    },
  });

  return styles;
}

export default useStyleCounter;
