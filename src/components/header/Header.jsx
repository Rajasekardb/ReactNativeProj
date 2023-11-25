import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import useStyleHeader from './useStyleHeader';

import Container from '../container/Container';
function Header({route, navigation, title}) {
  const styles = useStyleHeader();

  // console.log(route);
  // console.log(navigation);

  return (
    <View style={styles.header}>
      <Container>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <Text>{title}</Text>
      </Container>
    </View>
  );
}

export default Header;
