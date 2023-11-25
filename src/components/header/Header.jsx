import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import useStyleHeader from './useStyleHeader';

import Container from '../container/Container';
function Header({title}) {
  const styles = useStyleHeader();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

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
