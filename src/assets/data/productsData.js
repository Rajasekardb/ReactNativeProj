const productData = [
  {
    title: 'product 1',
    desc: 'description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1',
    price: 100,
    imgSrc: 'https://via.placeholder.com/200x150/F0E68C',
    category: 'category1',
  },

  {
    title: 'product 2',
    desc: 'description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2',
    price: 200,
    imgSrc: 'https://via.placeholder.com/200x150/FF69B4',
    category: 'category1',
  },

  {
    title: 'product 3',
    desc: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3 description 3 description 3 description 3',
    price: 300,
    imgSrc: 'https://via.placeholder.com/200x150/7FFFD4',
    category: 'category1',
  },

  {
    title: 'product 4',
    desc: 'description 4 description 4 description 4 description 4 description 4 description 4 description 4 description 4 description 4 description 4',
    price: 400,
    imgSrc: 'https://via.placeholder.com/200x150/8A2BE2',
    category: 'category2',
  },

  {
    title: 'product 5',
    desc: 'description 5 description 5 description 5 description 5 description 5 description 5 description 5 description 5 description 5 description 5',
    price: 500,
    imgSrc: 'https://via.placeholder.com/200x150/FF4500',
    category: 'category2',
  },

  {
    title: 'product 6',
    desc: 'description 6 description 6 description 6 description 6 description 6 description 6 description 6 description 6 description 6 description 6',
    price: 600,
    imgSrc: 'https://via.placeholder.com/200x150/d32776',
    category: 'category3',
  },
];

export default productData.map(product => ({
  ...product,
  id: window.crypto.randomUUID(),
  count: 1,

  get totalPrice() {
    return this.count * this.price;
  },
}));
