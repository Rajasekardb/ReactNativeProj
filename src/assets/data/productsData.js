import {generateId} from '../../utils/utils';

const productData = [
  {
    title: 'product 1',
    desc: 'Эта книга содержит множество рецептов на различные блюда. Она может быть использована как начинающими, так и опытными поварами и имеет множество полезных советов',
    price: 100,
    imgSrc: 'https://via.placeholder.com/200x150/F0E68C',
    category: 'category1',
  },

  {
    title: 'product 2',
    desc: 'Этот лосьон содержит 2% миноксидила.',
    price: 200,
    imgSrc: 'https://via.placeholder.com/200x150/FF69B4',
    category: 'category1',
  },

  {
    title: 'product 3',
    desc: 'Это средство для восстановления волос, которое можно использовать дома. Оно подходит для всех типов волос и текстур и может быть использовано еженедельно в качестве профилактики или до трех раз в неделю для восстановления поврежденных волос',
    price: 300,
    imgSrc: 'https://via.placeholder.com/200x150/7FFFD4',
    category: 'category1',
  },

  {
    title: 'product 4',
    desc: 'Это зеленый чай, который содержит кофеин. Он может быть использован в качестве альтернативы кофе и имеет множество полезных свойств, таких как увеличение бодрости и уменьшение нервозности. Вы можете продавать этот продукт вместе с инструментами для приготовления напитка, такими как чашки для матча и бамбуковые венчики',
    price: 400,
    imgSrc: 'https://via.placeholder.com/200x150/8A2BE2',
    category: 'category2',
  },

  {
    title: 'product 5',
    desc: 'Эта паста может быть использована людьми, которые не употребляют глютен. Она может быть использована в качестве замены обычной пасты и имеет множество вкусовых вариантов3.',
    price: 500,
    imgSrc: 'https://via.placeholder.com/200x150/FF4500',
    category: 'category2',
  },

  {
    title: 'product 6',
    desc: 'Эта одежда становится все более популярной в последнее время. Они могут быть использованы в качестве повседневной одежды и могут быть сочетаны с различными аксессуарами',
    price: 600,
    imgSrc: 'https://via.placeholder.com/200x150/d32776',
    category: 'category3',
  },
];

export default productData.map(product => ({
  ...product,
  id: generateId(),
  count: 1,

  get totalPrice() {
    return this.count * this.price;
  },
}));
