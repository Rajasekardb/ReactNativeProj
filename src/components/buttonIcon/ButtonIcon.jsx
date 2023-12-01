import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import useStyleButtonIcon from './useStyleButtonIcon';

function ButtonIcon({iconName, onPress}) {
  const styles = useStyleButtonIcon();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesomeIcon icon={iconName} />
    </TouchableOpacity>
  );
}

export default ButtonIcon;
