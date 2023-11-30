import {StyleSheet} from 'react-native';

function useStyleSectionContent() {
  const styles = StyleSheet.create({
    section: {
      flex: 1,
    },
    list: {
      paddingVertical: 8,
      gap: 15,
    },
  });

  return styles;
}

export default useStyleSectionContent;
