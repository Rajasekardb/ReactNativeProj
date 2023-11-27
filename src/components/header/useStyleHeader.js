import {StyleSheet} from 'react-native';

function useStyleHeader() {
  const styles = StyleSheet.create({
    header: {
      flexBasis: 58,
      backgroundColor: 'tomato',
    },

    inner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      backgroundColor: 'gold',
    },

    title: {
      textAlign: 'center',
      fontSize: 32,
      flex: 1,
    },
  });

  return styles;
}

export default useStyleHeader;
