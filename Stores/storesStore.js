// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class StoresStore {
  stores = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchStores = async () => {
    try {
      const response = await instance.get("/stores");
      this.stores = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createStore = async (newStore) => {
    try {
      const formData = new FormData();
      for (const key in newStore) formData.append(key, newStore[key]);
      const res = await instance.post(`/stores`, formData);
      this.stores.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateStore = async (updateStore) => {
    try {
      const formData = new FormData();
      for (const key in updateStore) formData.append(key, updateStore[key]);
      await instance.put(`/stores/${updateStore.id}`, formData);
      const store = this.stores.find((store) => store.id === updateStore.id);
      for (const key in store) store[key] = updateStore[key];
    } catch (error) {
      console.log(error);
    }
  };

  deleteStore = async (storeId) => {
    await instance.delete(`/stores/${storeId}`);
    this.stores = this.stores.filter((store) => store.id !== +storeId);
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const storesStore = new StoresStore();
storesStore.fetchStores();

export default storesStore;
