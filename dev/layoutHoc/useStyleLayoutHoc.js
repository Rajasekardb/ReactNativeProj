import {StyleSheet} from 'react-native';

function useStyleLayoutHoc() {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
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

export default useStyleLayoutHoc;
