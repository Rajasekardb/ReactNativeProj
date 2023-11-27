import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import useStyleTabIconItem from './useStyleTabIconItem';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function TabIconItem({iconName, onPress, isActive = false}) {
  const styles = useStyleTabIconItem(isActive);
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <FontAwesomeIcon icon={iconName} size={32} />
    </TouchableOpacity>
  );
}

export default TabIconItem;
