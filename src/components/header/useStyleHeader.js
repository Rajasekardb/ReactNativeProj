import {StyleSheet} from 'react-native';

function useStyleHeader() {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'tomato',
    },
  });

  return styles;
}

export default useStyleHeader;
