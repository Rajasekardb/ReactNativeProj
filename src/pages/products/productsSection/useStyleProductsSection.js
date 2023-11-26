import {StyleSheet} from 'react-native';

function useStyleProductsSection() {
  const styles = StyleSheet.create({
    section: {
      // height: '90%',
      // backgroundColor: 'blue',
    },

    list: {
      paddingBottom: 50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
      backgroundColor: 'red',
    },
  });

  return styles;
}

export default useStyleProductsSection;
