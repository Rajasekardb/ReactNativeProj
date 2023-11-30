import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleItemBasket() {
  const styles = StyleSheet.create({
    item: {
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: COLORS.bg_light,
    },

    image: {
      width: 130,
      height: 120,
    },

    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 8,
      gap: 8,
    },

    title: {
      // textAlign: 'center',
      fontWeight: '800',
      textTransform: 'uppercase',
    },

    control: {
      padding: 8,
    },
  });

  return styles;
}

export default useStyleItemBasket;
