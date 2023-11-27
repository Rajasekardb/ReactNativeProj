import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleTabIconItem(isActive) {
  const styles = StyleSheet.create({
    tab: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 7,
      borderRadius: 10,
      elevation: 7,
      backgroundColor: isActive ? COLORS.accent : COLORS.white,
    },
  });

  return styles;
}

export default useStyleTabIconItem;
