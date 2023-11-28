import AppPage from '../pages/app/AppPage';
import MenuPage from '../pages/menu/rootMenu/RootMenu';
import ProductsPage from '../pages/products/rootProducts/RootProducts';

const ROUTES_DATA = {
  home: {
    id: 0,
    name: 'menu',
    component: MenuPage,
    title: 'Меню',
    isShowButton: false,
    options: {headerShown: false},
  },

  products: {
    id: 1,
    name: 'products',
    component: ProductsPage,
    title: 'Продукты',
    isShowButton: true,
    options: {headerShown: false},
  },

  app: {
    id: 101,
    name: 'app',
    component: AppPage,
    title: 'Апп',
    isShowButton: true,
    options: {headerShown: false},
  },
};

const ROUTES_ARRAY_DATA = Object.entries(ROUTES_DATA).map(([key, obj]) => obj);

const ROUTES_ARRAY_BUTTON = ROUTES_ARRAY_DATA.filter(item => item.isShowButton);

export {ROUTES_DATA, ROUTES_ARRAY_DATA, ROUTES_ARRAY_BUTTON};
