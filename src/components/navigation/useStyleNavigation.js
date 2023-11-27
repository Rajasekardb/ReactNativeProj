import {StyleSheet} from 'react-native';

function useStyleNavigation() {
  const styles = StyleSheet.create({
    navigation: {
      backgroundColor: 'yellow',
      padding: 8,
      flexDirection: 'row',
      gap: 15,
    },
  });

  return styles;
}

export default useStyleNavigation;
