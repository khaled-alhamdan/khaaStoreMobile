// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  getProductById = async (productId) => {
    await instance.get(`/products/${productId}`);
    this.products.find((product) => product.id === +productId);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  createProduct = async (newProduct) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const res = await instance.post(`/products`, formData);
      this.products.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateProduct = async (updateProduct) => {
    try {
      const formData = new FormData();
      for (const key in updateProduct) formData.append(key, updateProduct[key]);
      await instance.put(`/products/${updateProduct.id}`, formData);
      const product = this.products.find(
        (product) => product.id === updateProduct.id
      );
      for (const key in product) product[key] = updateProduct[key];
    } catch (error) {
      console.log(error);
    }
  };

  deleteProduct = async (productId) => {
    await instance.delete(`/products/${productId}`);
    this.products = this.products.filter(
      (product) => product.id !== +productId
    );
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
