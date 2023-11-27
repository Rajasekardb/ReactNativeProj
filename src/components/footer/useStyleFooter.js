import {StyleSheet} from 'react-native';

function useStyleFooter() {
  const styles = StyleSheet.create({
    footer: {
      flexBasis: 50,
      backgroundColor: 'blue',
      // flex: 1,
      // flexBasis: 'auto',
    },
  });

  return styles;
}

export default useStyleFooter;
