import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleSectionEmpty() {
  const styles = StyleSheet.create({
    section: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
    },

    icon: {
      opacity: 0.5,
    },

    title: {
      opacity: 0.5,
      fontWeight: '800',
      fontSize: 64,
      color: COLORS.accent,
    },
  });

  return styles;
}

export default useStyleSectionEmpty;
