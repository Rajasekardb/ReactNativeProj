import {StyleSheet} from 'react-native';

function useStyleMenu() {
  const styles = StyleSheet.create({
    page: {
      paddingTop: 50,
      height: '100%',
    },
    list: {
      gap: 20,
    },
  });

  return styles;
}

export default useStyleMenu;
