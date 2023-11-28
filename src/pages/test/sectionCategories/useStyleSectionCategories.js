import {StyleSheet} from 'react-native';

function useStyleSectionCategories() {
  const styles = StyleSheet.create({
    section: {},
    scroll: {},
    list: {
      alignItems: 'flex-start',
      padding: 8,
      gap: 15,
    },
  });

  return styles;
}

export default useStyleSectionCategories;
