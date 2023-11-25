import {StyleSheet} from 'react-native';

function useStyleMenuItem() {
  const styles = StyleSheet.create({
    button: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      backgroundColor: 'rgba(0, 0, 0, .5)',
      borderRadius: 8,
    },
    title: {
      color: 'red',
    },
  });

  return styles;
}

export default useStyleMenuItem;
