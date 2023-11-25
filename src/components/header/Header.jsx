import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import useStyleHeader from './useStyleHeader';
import {useNavigation, useRoute} from '@react-navigation/native';

import Container from '../container/Container';
function Header({title}) {
  const styles = useStyleHeader();
  const route = useRoute();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  console.log(route);

  return (
    <View style={styles.header}>
      <Container>
        <TouchableOpacity onPress={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <Text>{title}</Text>
      </Container>
    </View>
  );
}

export default Header;
