import {makeAutoObservable} from 'mobx';
import PRODUCT_ARRAY_DATA from '../assets/data/productsData';
import {CATEGORIES_DATA} from '../assets/data/categoriesData';
class ProductsStore {
  constructor() {
    makeAutoObservable(this);
    this.productListAll = PRODUCT_ARRAY_DATA;
    this.category = CATEGORIES_DATA.all;
  }

  get productList() {
    console.log(this.category.type);
    if (this.category.type === CATEGORIES_DATA.all.type) {
      return this.productListAll;
    } else {
      return this.productListAll.filter(
        product => product.category === this.category.type,
      );
    }
  }

  get basketList() {
    return this.productListAll.filter(product => product.isBasket);
  }

  changeCategory = category => {
    this.category = category;
  };
}

export default new ProductsStore();
