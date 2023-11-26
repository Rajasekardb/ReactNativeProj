import AppPage from '../pages/app/AppPage';
import MenuPage from '../pages/menu/MenuPage';
import ProductsPage from '../pages/products/ProductsPage';
import TestPage from '../pages/test/TestPage';

const routesData = {
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

  test: {
    id: 102,
    name: 'test',
    component: TestPage,
    title: 'Тест',
    isShowButton: true,
    options: {headerShown: false},
  },
};

const routesArray = Object.entries(routesData).map(([key, obj]) => obj);

const routesButtonArray = routesArray.filter(item => item.isShowButton);

export {routesData, routesArray, routesButtonArray};
