import {StyleSheet} from 'react-native';

function useStyleContainerTest() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      marginHorizontal: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });

  return styles;
}

export default useStyleContainerTest;
