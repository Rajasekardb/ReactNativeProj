import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/styles/stylesColors';

function useStyleRootBasket() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
  });

  return styles;
}

export default useStyleRootBasket;
