import {StyleSheet} from 'react-native';

function useStyleMenu() {
  const styles = StyleSheet.create({
    menu: {
      height: '100%',
    },
  });

  return styles;
}

export default useStyleMenu;
