import {StyleSheet} from 'react-native';

function useStyleContainerTest(full = false) {
  const styles = StyleSheet.create({
    container: {
      flex: full ? 1 : 0,

      marginHorizontal: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });

  return styles;
}

export default useStyleContainerTest;
