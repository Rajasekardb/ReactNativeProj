import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleRootProductDetails() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: COLORS.bg_dark,
    },

    scrollImages: {
      height: 700,
    },

    imagesBox: {},

    image: {
      width: Dimensions.get('window').width,
    },

    scrollContent: {
      marginBottom: 10,
    },

    main: {
      backgroundColor: COLORS.light,
      paddingBottom: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      gap: 15,
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
