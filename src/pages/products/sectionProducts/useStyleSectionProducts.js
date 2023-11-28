import {StyleSheet} from 'react-native';

function useStyleSectionProducts() {
  const styles = StyleSheet.create({
    section: {
      flex: 1,
    },
    scroll: {},
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 15,
      padding: 8,
    },
  });

  return styles;
}

export default useStyleSectionProducts;
