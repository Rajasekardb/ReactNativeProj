import {StyleSheet} from 'react-native';

function useStyleButton() {
  const styles = StyleSheet.create({
    button: {
      padding: 15,
      backfaceVisibility: 'rgba(0, 0, 0, .5)',
    },
  });

  return styles;
}

export default useStyleButton;
