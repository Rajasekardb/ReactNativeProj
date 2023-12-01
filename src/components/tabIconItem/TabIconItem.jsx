import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';

import productsStore from '../../store/productsStore';

import useStyleTabIconItem from './useStyleTabIconItem';
import COLORS from '../../assets/styles/stylesColors';

function TabIconItem({iconName, type, title}) {
  const {category, changeCategory} = productsStore;
  const isActive = category.type === type;
  const styles = useStyleTabIconItem(isActive);
  const handlerPress = () => changeCategory({type, title});

  return (
    <TouchableOpacity style={styles.tab} onPress={handlerPress}>
      <FontAwesomeIcon icon={iconName} size={48} color={COLORS.black} />
    </TouchableOpacity>
  );
}

export default observer(TabIconItem);
