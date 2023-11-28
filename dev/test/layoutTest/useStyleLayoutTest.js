import {StyleSheet} from 'react-native';

function useStyleLayoutTest() {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: 'black',
    },

    header: {
      backgroundColor: 'gold',
    },

    main: {
      flex: 1,
      backgroundColor: 'orange',
    },

    navigation: {
      backgroundColor: 'gold',
    },
  });

  return styles;
}

export default useStyleLayoutTest;
