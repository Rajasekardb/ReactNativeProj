import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleProductItem() {
  const styles = StyleSheet.create({
    item: {
      flex: 1,
      flexBasis: '45%',
      backgroundColor: COLORS.white,
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

export default useStyleProductItem;
