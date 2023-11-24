import {StyleSheet} from 'react-native';

function useStyleFooter() {
  const styles = StyleSheet.create({
    footer: {
      backgroundColor: 'blue',
    },
  });

  return styles;
}

export default useStyleFooter;
