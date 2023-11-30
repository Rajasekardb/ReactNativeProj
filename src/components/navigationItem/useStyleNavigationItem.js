import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleNavigationItem(isActive) {
  const styles = StyleSheet.create({
    item: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 7,
      paddingBottom: 3,
      paddingHorizontal: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTopWidth: isActive ? 1 : 0,
      borderLeftWidth: isActive ? 1 : 0,
      borderRightWidth: isActive ? 1 : 0,
      borderColor: COLORS.bg_light,
      elevation: 7,
      backgroundColor: isActive ? COLORS.accent : COLORS.white,
    },
  });

  return styles;
}

export default useStyleNavigationItem;
