import React from 'react';
import {Text, View} from 'react-native';

import Container from '../container/Container';
import useStyleFooter from './useStyleFooter';

function Footer() {
  const styles = useStyleFooter();
  return (
    <View style={styles.footer}>
      <Container>
        <Text>
          Для того, чтобы ограничить высоту ScrollView, необходимо убедиться,
          что все родительские элементы имеют ограниченную высоту. В противном
          случае, ScrollView не будет работать, так как он содержит дочерние
          элементы с неограниченной высотой в ограниченном контейнере через
          взаимодействие прокрутки. Чтобы ограничить высоту ScrollView, можно
          либо установить высоту представления напрямую не рекомендуется, либо
          убедиться, что все родительские представления имеют ограниченную
          высоту. Забыв передать по стеку представлений может привести к
          ошибкам, которые легко отлаживать в инспекторе элементов 123.
        </Text>
      </Container>
    </View>
  );
}

export default Footer;
