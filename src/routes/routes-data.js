import AppPage from '../pages/app/AppPage';
import RootBasket from '../pages/basket/rootBasket/RootBasket';
import RootMenu from '../pages/menu/rootMenu/RootMenu';
import RootProductDetails from '../pages/productDetails/rootProductDetails/RootProductDetails';
import RootProducts from '../pages/products/rootProducts/RootProducts';

const ROUTES_DATA = {
  menu: {
    id: 0,
    name: 'menu',
    component: RootMenu,
    title: 'Меню',
    isShowButton: false,
    options: {headerShown: false},
  },

  home: {
    id: 1,
    name: 'home',
    component: RootMenu,
    title: 'Меню',
    isShowButton: false,
    options: {headerShown: false},
  },

  products: {
    id: 2,
    name: 'products',
    component: RootProducts,
    title: 'Продукты',
    isShowButton: true,
    options: {headerShown: false},
  },

  basket: {
    id: 3,
    name: 'basket',
    component: RootBasket,
    title: 'Корзина',
    isShowButton: true,
    options: {headerShown: false},
  },

  productDetails: {
    id: 4,
    name: 'productDetails',
    component: RootProductDetails,
    title: 'Детали',
    isShowButton: false,
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
