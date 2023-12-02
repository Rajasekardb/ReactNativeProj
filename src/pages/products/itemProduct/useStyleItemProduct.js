import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleItemProduct() {
  const styles = StyleSheet.create({
    item: {
      flex: 1,
      flexBasis: '40%',
      backgroundColor: COLORS.light,
      borderRadius: 15,
      overflow: 'hidden',
      elevation: 7,
    },

    header: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
    },

    title: {
      color: COLORS.black,
      fontSize: 16,
      fontWeight: '800',
      textTransform: 'uppercase',
    },

    main: {
      flex: 1,
    },
    mainInner: {
      padding: 8,
    },

    desc: {
      opacity: 0.8,
      color: COLORS.black,
    },

    image: {
      width: '100%',
      height: 100,
    },

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 8,
    },
  });

  return styles;
}

export default useStyleItemProduct;
