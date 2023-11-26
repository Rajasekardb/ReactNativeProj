import React from 'react';
import {ImageBackground, View} from 'react-native';

import Container from '../container/Container';
import Header from '../header/Header';
import useStyleLayoutImage from './useStyleLayoutImage';

function LayoutImage({children, title, imgSrc, isShowHeader = false}) {
  const styles = useStyleLayoutImage();
  return (
    <ImageBackground source={imgSrc} style={styles.layout}>
      {isShowHeader && <Header title={title} />}
      <View style={styles.main}>
        <Container>{children}</Container>
      </View>
    </ImageBackground>
  );
}

export default LayoutImage;
