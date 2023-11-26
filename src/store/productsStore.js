import {makeAutoObservable} from 'mobx';
import productsData from '../assets/data/productsData';

class ProductsStore {
  constructor() {
    makeAutoObservable(this);
    this.productListAll = productsData;
  }
}

export default new ProductsStore();
