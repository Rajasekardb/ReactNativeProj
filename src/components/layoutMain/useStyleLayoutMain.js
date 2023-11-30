import {StyleSheet} from 'react-native';
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

    header: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      elevation: 7,
      backgroundColor: COLORS.bg_dark,
    },

    main: {
      flex: 1,
    },

    navigation: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 7,
      backgroundColor: COLORS.bg_dark,
    },
  });

  return styles;
}

export default useStyleLayoutMain;
