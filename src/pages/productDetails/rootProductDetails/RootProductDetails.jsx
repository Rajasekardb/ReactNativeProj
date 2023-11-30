import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

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
  const {findProduct, addBasket} = productsStore;
  const {title, imgSrc, desc, price} = findProduct(id);
  const goBack = () => navigation.goBack();
  const handlerBuy = () => {
    addBasket(id);
  };
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={{uri: imgSrc}} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.main}>
        <Container>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </Container>
      </ScrollView>

      <Container>
        <View style={styles.footer}>
          <ButtonIcon onPress={goBack} iconName="arrow-left" />
          <Price price={price} />
          <Button title="Купить" onPress={handlerBuy} />
        </View>
      </Container>
    </View>
  );
}

export default RootProductDetails;
