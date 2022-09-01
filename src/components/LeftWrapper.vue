<script setup>
import BuyButton from "./BuyButton.vue";
import Header from "./Header.vue";
</script>

<template>
  <div>
    <div class="left-section">
      <div class="grid"><Header /> <BuyButton /></div>
    </div>
  </div>
</template>

<style scoped>
.left-section {
  position: absolute;
  left: 17rem;
  top: 51.5%;
  transform: translate(0, -50%);
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
