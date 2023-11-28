import {StyleSheet} from 'react-native';

function useStyleHeaderTest() {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      // backgroundColor: 'gold',
    },

    title: {
      textAlign: 'center',
      fontSize: 32,
      flex: 1,
    },
  });

  return styles;
}

export default useStyleHeaderTest;
