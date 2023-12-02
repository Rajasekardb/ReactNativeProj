import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import productsStore from '../../store/productsStore';
import useStyleNavigationItem from './useStyleNavigationItem';
import COLORS from '../../assets/styles/stylesColors';

function NavigationItem({isActive, iconName, onPress}) {
  const styles = useStyleNavigationItem(isActive);
  const {countItemsBasket} = productsStore;
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <FontAwesomeIcon icon={iconName} size={32} color={COLORS.black} />
      <Text style={styles.count}>{countItemsBasket}</Text>
    </TouchableOpacity>
  );
}

export default NavigationItem;
