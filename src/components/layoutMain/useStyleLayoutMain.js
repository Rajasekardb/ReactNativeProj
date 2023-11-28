import {StyleSheet, Dimensions} from 'react-native';

function useStyleLayoutMain() {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      justifyContent: 'space-between',
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
      backgroundColor: 'green',
    },

    header: {
      backgroundColor: 'blue',
    },

    main: {
      flex: 1,
      backgroundColor: 'orange',
    },

    navigation: {
      backgroundColor: 'blue',
    },
  });

  return styles;
}

export default useStyleLayoutMain;
