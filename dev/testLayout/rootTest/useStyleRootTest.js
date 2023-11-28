import {StyleSheet} from 'react-native';

function useStyleRootTest() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
  });

  return styles;
}

export default useStyleRootTest;
