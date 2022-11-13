<script setup>
import { amountStore } from "../../stores/CartStore";
import { boolStore } from "../../stores/CartStore";
</script>

<template>
  <div>
    <img class="logo" src="../img/logo.png" alt="" />

    <!-- <img class="qm" src="../img/question-mark.svg" alt="" /> -->
    <!-- <img class="blob" src="../img/blob.png" alt="" /> -->
    <h3>{{ amountStore().count / 2 }}</h3>
    <img
      @click="boolStore().bool = true"
      class="basket"
      src="../ico/cart2.svg"
      alt=""
    />

    <ul>
      <li><RouterLink class="li" to="/">Home</RouterLink></li>
      <!-- <li>Shop</li> -->
      <li><RouterLink class="li" to="/ingredients">Ingredients</RouterLink></li>

      <li><RouterLink class="li" to="/contact">Contact</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 50%;
  top: 3.1rem;
  transform: translate(-50%, 0);
  width: 38rem;
  list-style: none;

  padding: 0.5rem 1rem;
  z-index: 900;
}
.li {
  font-size: 2rem;
  text-decoration: none;
  color: black;
}

.logo {
  height: 6rem;
  position: absolute;
  top: 1.7rem;
  left: 14.2rem;
}
@media (orientation: portrait) {
  .logo {
    left: 4rem;
  }
  ul {
    display: none;
  }
  .basket {
    right: 4rem !important;
  }
  h3 {
    right: 9rem !important;
  }
}

.blob {
  width: 6rem;
  z-index: -11;
  position: absolute;
  top: 2rem;
  right: 7rem;
}
.basket {
  height: 5rem;
  cursor: pointer;
  position: absolute;
  top: 2.4rem;
  right: 7.3rem;
  transition: 0.1s;
}
h3 {
  position: absolute;
  right: 12.5rem;
  top: 1.7rem;
  font-size: 2rem;
  color: red;
}

@media (hover: hover) {
  .basket:hover {
    scale: 1.05;
  }
}
.qm {
  width: 2rem;
  position: absolute;
  right: 17rem;
  top: 3.8rem;
}

@media (hover: hover) {
  a:hover {
    border-bottom: 1px solid red;
    padding-bottom: 2px;
  }
}

a.router-link-active {
  border-bottom: 1px solid red;
  padding-bottom: 2px;
}
</style>
