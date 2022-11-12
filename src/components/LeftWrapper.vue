<script setup>
import BuyButton from "./BuyButton.vue";
import Header from "./Header.vue";
import Ecommerce from "../components/Ecommerce.vue";
</script>

<template>
  <div>
    <Ecommerce />

    <div class="left-section">
      <div class="grid"><Header /> <BuyButton /></div>

      <img class="spiral" src="../img/spiral.png" />
    </div>
  </div>
</template>

<style scoped>
.spiral {
  width: 60rem;
  position: absolute;
  left: -60rem;
  top: -8rem;
  z-index: -11;
  /*filter: blur(9px);*/
}
.left-section {
  position: absolute;
  left: 17rem;
  top: 51.5%;
  transform: translate(0, -50%) !important;
  width: 25%;
  /* background-color: rgba(26, 209, 23, 0.284);*/
  margin-top: 1.6rem;

  padding: 2.5rem;
  border-left: 3px rgb(144, 26, 223) solid;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
