import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../assets/styles/stylesColors';

function useStyleLayoutMain() {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      justifyContent: 'space-between',
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
      backgroundColor: COLORS.bg,
    },

    header: {},

    main: {
      flex: 1,
    },

    navigation: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: COLORS.bg_dark,
    },
  });

  return styles;
}

export default useStyleLayoutMain;
