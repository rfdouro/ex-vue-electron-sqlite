import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter += 2;
    },
    decrement() {
      this.counter -= 2;
    },
  },
});
