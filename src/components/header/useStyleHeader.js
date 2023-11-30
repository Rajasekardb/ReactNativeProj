import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleHeader() {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
    },

    leftHub: {
      flexDirection: 'row',
      gap: 15,
    },

    rightHub: {
      // Fix symmetry
      paddingLeft: 45,
      flexDirection: 'row',
      gap: 15,
    },

    title: {
      textAlign: 'center',
      fontSize: 32,
      flex: 1,
      color: COLORS.white,
    },
  });

  return styles;
}

export default useStyleHeader;
