import {StyleSheet, Dimensions} from 'react-native';

function useStyleLayoutMain() {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
      justifyContent: 'space-between',
      backgroundColor: 'green',
    },

    main: {
      flex: 1,
      backgroundColor: 'orange',
    },
  });

  return styles;
}

export default useStyleLayoutMain;
