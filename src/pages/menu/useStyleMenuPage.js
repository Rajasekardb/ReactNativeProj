import {StyleSheet} from 'react-native';

function useStyleMenu() {
  const styles = StyleSheet.create({
    menu: {
      backgroundColor: 'red',
    },
  });

  return styles;
}

export default useStyleMenu;
