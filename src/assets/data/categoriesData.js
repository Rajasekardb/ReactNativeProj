const CATEGORIES_DATA = {
  all: {
    id: '0',
    title: 'Все',
    iconName: 'globe',
    type: 'all',
  },

  category1: {
    id: '1',
    title: 'Смартфоны',
    iconName: 'mobile',
    type: 'mobile',
  },

  category2: {
    id: '2',
    title: 'Ноутбуки',
    iconName: 'laptop',
    type: 'laptop',
  },

  category3: {
    id: '3',
    title: 'Планшеты',
    iconName: 'tablet',
    type: 'tablet',
  },

  category4: {
    id: '4',
    title: 'Часы',
    iconName: 'clock',
    type: 'clock',
  },

  category5: {
    id: '5',
    title: 'Категория 5',
    iconName: 'face-smile',
    type: 'category5',
  },
};

const CATEGORIES_ARRAY_DATA = Object.entries(CATEGORIES_DATA).map(
  ([key, obj]) => obj,
);

export {CATEGORIES_DATA, CATEGORIES_ARRAY_DATA};
