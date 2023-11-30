import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleRootProductDetails() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: COLORS.bg_dark,
    },

    scroll: {
      marginBottom: 10,
    },

    main: {
      backgroundColor: COLORS.white,
      paddingBottom: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      gap: 15,
    },

    image: {
      width: '100%',
      height: 300,
    },

    title: {
      textAlign: 'center',
      fontSize: 32,
      textTransform: 'uppercase',
      fontWeight: '800',
      color: COLORS.black,
    },

    desc: {
      fontSize: 18,
    },

    footer: {
      paddingVertical: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 15,
    },
  });

  return styles;
}

export default useStyleRootProductDetails;
