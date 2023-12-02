import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleButtonIcon() {
  const styles = StyleSheet.create({
    button: {
      padding: 8,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: COLORS.black,
      backgroundColor: COLORS.bg_light,
      elevation: 7,
    },
  });

  return styles;
}

export default useStyleButtonIcon;
