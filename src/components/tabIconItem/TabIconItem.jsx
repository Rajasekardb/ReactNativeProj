import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import useStyleTabIconItem from './useStyleTabIconItem';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function TabIconItem({
  iconName,
  iconSize,
  iconColor,
  onPress,
  isActive = false,
}) {
  const styles = useStyleTabIconItem(isActive);
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <FontAwesomeIcon icon={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

export default TabIconItem;
