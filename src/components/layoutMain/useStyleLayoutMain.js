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
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      marginHorizontal: -2,
      paddingHorizontal: 2,
      borderColor: COLORS.bg_light,
      elevation: 7,
      backgroundColor: COLORS.bg_dark,
    },

    main: {
      flex: 1,
    },

    navigation: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      marginHorizontal: -2,
      paddingHorizontal: 2,
      borderColor: COLORS.bg_light,
      elevation: 7,
      backgroundColor: COLORS.bg_dark,
    },
  });

  return styles;
}

export default useStyleLayoutMain;
