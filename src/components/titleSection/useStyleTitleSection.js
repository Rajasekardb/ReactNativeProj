import {StyleSheet} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleTitleSection() {
  const styles = StyleSheet.create({
    boxTitle: {
      paddingVertical: 5,
      paddingHorizontal: 30,
      borderRadius: 10,
      backgroundColor: COLORS.white,
    },
    title: {
      color: COLORS.black,
      fontSize: 28,
      fontWeight: '800',
    },
  });

  return styles;
}

export default useStyleTitleSection;
