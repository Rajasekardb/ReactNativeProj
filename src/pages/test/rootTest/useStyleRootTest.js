import {StyleSheet} from 'react-native';

function useStyleRootTest() {
  const styles = StyleSheet.create({
    // layout
    layout: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: 'black',
      // marginHorizontal: 8,
      // paddingHorizontal: 8,
    },

    header: {
      backgroundColor: 'gold',
    },

    main: {
      flex: 1,
      backgroundColor: 'orange',
    },

    footer: {
      backgroundColor: 'gold',
    },

    // Base
    text: {
      textAlign: 'center',
      color: 'red',
    },
  });

  return styles;
}

export default useStyleRootTest;
