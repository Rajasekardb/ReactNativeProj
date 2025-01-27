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

    title: {
      textAlign: 'center',
      fontSize: 32,
      flex: 1,
      color: COLORS.bg_light,
    },
  });

  return styles;
}

export default useStyleHeader;
