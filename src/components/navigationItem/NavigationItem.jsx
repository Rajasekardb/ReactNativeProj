import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import useStyleNavigationItem from './useStyleNavigationItem';
import COLORS from '../../assets/styles/stylesColors';

function NavigationItem({isActive, iconName, onPress}) {
  const styles = useStyleNavigationItem(isActive);
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <FontAwesomeIcon
        icon={iconName}
        size={32}
        color={isActive ? COLORS.black : COLORS.accent}
      />
    </TouchableOpacity>
  );
}

export default NavigationItem;
