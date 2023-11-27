const CATEGORIES_DATA = {
  all: {
    id: '0',
    title: 'Все',
    iconName: 'border-all',
    type: 'all',
  },

  category1: {
    id: '1',
    title: 'Категория 1',
    iconName: 'heart',
    type: 'category1',
  },

  category2: {
    id: '2',
    title: 'Категория 2',
    iconName: 'bomb',
    type: 'category2',
  },

  category3: {
    id: '3',
    title: 'Категория 3',
    iconName: 'star',
    type: 'category3',
  },

  category4: {
    id: '4',
    title: 'Категория 4',
    iconName: 'poo',
    type: 'category3',
  },

  category5: {
    id: '5',
    title: 'Категория 5',
    iconName: 'face-smile',
    type: 'category3',
  },
};

const CATEGORIES_ARRAY_DATA = Object.entries(CATEGORIES_DATA).map(
  ([key, obj]) => obj,
);

export {CATEGORIES_DATA, CATEGORIES_ARRAY_DATA};
