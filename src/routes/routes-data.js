import MenuPage from '../pages/menu/MenuPage';

const routesData = {
  home: {
    id: '0',
    name: 'menu',
    component: MenuPage,
    options: {headerShown: false},
  },
};

const routesArray = Object.entries(routesData).map(([key, obj]) => obj);

export {routesData, routesArray};
