import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {ROUTES_DATA} from '../../../routes/routes-data';

import Button from '../../../components/button/Button';

import useStyleEmptyBasket from './useStyleSectionEmpty';
import COLORS from '../../../assets/styles/stylesColors';

function SectionEmpty() {
  const styles = useStyleEmptyBasket();
  const navigation = useNavigation();
  const goProducts = () => navigation.push(ROUTES_DATA.products.name);
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Пусто!</Text>

      <FontAwesomeIcon
        style={styles.icon}
        icon="ban"
        size={200}
        color={COLORS.accent}
      />

      <Button title="Добавить" onPress={goProducts} />
    </View>
  );
}

export default SectionEmpty;
