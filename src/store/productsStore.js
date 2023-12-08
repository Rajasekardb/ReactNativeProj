import {makeAutoObservable} from 'mobx';

import PRODUCT_ARRAY_DATA from '../assets/data/productsData';
import {CATEGORIES_DATA} from '../assets/data/categoriesData';

class ProductsStore {
  constructor() {
    makeAutoObservable(this);
  }

  productsListAll = PRODUCT_ARRAY_DATA;
  category = CATEGORIES_DATA.all;

  get productList() {
    if (this.category.type === CATEGORIES_DATA.all.type) {
      return this.productsListAll;
    } else {
      return this.productsListAll.filter(
        product => product.category === this.category.type,
      );
    }
  }

  get basketsList() {
    return this.productsListAll.filter(product => product.isBasket);
  }

  get totalPriceBasket() {
    return this.basketsList.reduce(
      (acc, product) => acc + product.price * product.count,
      0,
    );
  }

  get countItemsBasket() {
    return this.basketsList.length;
  }

  findProduct = id => {
    return this.productsListAll.find(product => product.id === id);
  };

  findProductBaskets = id => {
    return this.basketsList.find(product => product.id === id);
  };

  decrementProduct = id => {
    const product = this.findProduct(id);
    if (product.count > 1) {
      product.count--;
    } else {
      this.removeBasket(id);
    }
  };

  incrementProduct = id => {
    const product = this.findProduct(id);
    product.count++;
  };

  addBasket = id => {
    const product = this.findProduct(id);

    if (product) {
      product.isBasket = true;
    }
  };

  removeBasket = id => {
    const product = this.findProduct(id);

    if (product) {
      product.isBasket = false;
    }
  };

  toggleBasket = id => {
    const product = this.findProductBaskets(id);

    if (product) {
      this.removeBasket(id);
    } else {
      this.addBasket(id);
    }
  };

  clearBasket = () => {
    this.basketsList.forEach(product => {
      product.count = 1;
      product.isBasket = false;
    });
  };

  changeCategory = category => {
    this.category = category;
  };
}

export default new ProductsStore();
