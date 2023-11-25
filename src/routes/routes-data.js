import AppPage from '../pages/app/AppPage';
import MenuPage from '../pages/menu/MenuPage';
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

  app: {
    id: 1,
    name: 'app',
    component: AppPage,
    title: 'Апп',
    isShowButton: true,
    options: {headerShown: false},
  },

  test: {
    id: 2,
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
