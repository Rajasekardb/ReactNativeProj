import {StyleSheet} from 'react-native';

function useStyleContainer(full) {
  const styles = StyleSheet.create({
    container: {
      flex: full ? 1 : 0,
      marginHorizontal: 20,
    },
  });

  return styles;
}

export default useStyleContainer;
