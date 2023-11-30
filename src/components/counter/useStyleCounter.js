import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleCounter() {
  const styles = StyleSheet.create({
    box: {
      flexDirection: 'column',
      padding: 8,
      backgroundColor: COLORS.accent,
    },
  });

  return styles;
}

export default useStyleCounter;
