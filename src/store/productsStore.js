import {makeAutoObservable} from 'mobx';
import PRODUCT_ARRAY_DATA from '../assets/data/productsData';

class ProductsStore {
  constructor() {
    makeAutoObservable(this);
    this.productListAll = PRODUCT_ARRAY_DATA;
  }
}

export default new ProductsStore();
