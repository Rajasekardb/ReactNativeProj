import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

import {ROUTES_DATA} from '../../../routes/routes-data';
import productsStore from '../../../store/productsStore';

import useStyleRootProductDetails from './useStyleRootProductDetails';
import Container from '../../../components/container/Container';
import Button from '../../../components/button/Button';
import Price from '../../../components/price/Price';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

function RootProductDetails() {
  const styles = useStyleRootProductDetails();
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  const {findProduct, addBasket, removeBasket} = productsStore;
  const {title, imgCover, images, desc, price, isBasket} = findProduct(id);

  const goBack = () => navigation.goBack();
  const goBasket = () => navigation.push(ROUTES_DATA.basket.name);
  const handlerBuy = () => {
    addBasket(id);
    // goBasket();
  };
  const handlerDelete = () => {
    removeBasket(id);
  };

  return (
    <View style={styles.page}>
      <ScrollView
        style={styles.scrollImages}
        contentContainerStyle={styles.imagesBox}
        horizontal>
        <Image style={styles.image} source={{uri: imgCover}} />
        {images.map(image => (
          <Image
            style={styles.image}
            key={image.id}
            source={{uri: image.src}}
          />
        ))}
      </ScrollView>

      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={styles.main}>
        <Container>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </Container>
      </ScrollView>

      <Container>
        <View style={styles.footer}>
          <ButtonIcon onPress={goBack} iconName="arrow-left" />
          <Price price={price} />
          <Button
            title={isBasket ? 'Удалить' : 'Добавить'}
            onPress={isBasket ? handlerDelete : handlerBuy}
          />
        </View>
      </Container>
    </View>
  );
}

export default observer(RootProductDetails);
