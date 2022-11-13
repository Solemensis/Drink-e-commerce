import { defineStore } from "pinia";

export const amountStore = defineStore("product-store", {
  state: () => ({
    count: 0,
    can1: 0,
    can2: 0,
    can3: 0,
    can4: 0,
  }),
  getters: {
    totalPrice: (state) =>
      (state.can1 + state.can2 + state.can3 + state.can4) * 2,
  },
});

export const boolStore = defineStore("counter2", {
  state: () => {
    return { bool: false };
  },
});
