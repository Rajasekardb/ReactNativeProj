import {StyleSheet} from 'react-native';

function useStyleContainer() {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });

  return styles;
}

export default useStyleContainer;
