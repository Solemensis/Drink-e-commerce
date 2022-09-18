import { defineStore } from "pinia";

export const amountStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
});

export const boolStore = defineStore("counter2", {
  state: () => {
    return { bool: false };
  },
});
