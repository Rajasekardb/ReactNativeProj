const CATEGORIES_DATA = {
  all: {
    id: '0',
    title: 'Все',
    type: 'all',
  },

  category1: {
    id: '1',
    title: 'Категория 1',
    type: 'category1',
  },

  category2: {
    id: '2',
    title: 'Категория 2',
    type: 'category2',
  },

  category3: {
    id: '3',
    title: 'Категория 3',
    type: 'category3',
  },
};

const CATEGORIES_ARRAY_DATA = Object.entries(CATEGORIES_DATA).map(
  ([key, obj]) => obj,
);

export {CATEGORIES_DATA, CATEGORIES_ARRAY_DATA};
