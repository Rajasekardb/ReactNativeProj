import {StyleSheet} from 'react-native';

function useStyleNavigation() {
  const styles = StyleSheet.create({
    navigation: {
      paddingTop: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 30,
      elevation: 7,
    },
  });

  return styles;
}

export default useStyleNavigation;
