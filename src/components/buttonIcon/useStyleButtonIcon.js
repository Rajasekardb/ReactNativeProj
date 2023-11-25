import {StyleSheet} from 'react-native';

function useStyleButtonIcon() {
  const styles = StyleSheet.create({
    button: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: 'white',
    },
  });

  return styles;
}

export default useStyleButtonIcon;
