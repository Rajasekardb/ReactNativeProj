import {StyleSheet} from 'react-native';

function useStyleRootMenu() {
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

export default useStyleRootMenu;
