import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import useStyleButtonIcon from './useStyleButtonIcon';

function ButtonIcon({onPress}) {
  const styles = useStyleButtonIcon();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesomeIcon icon="arrow-left" />
    </TouchableOpacity>
  );
}

export default ButtonIcon;
