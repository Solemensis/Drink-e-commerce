<script setup></script>

<template>
  <img class="logo" src="../img/logo.png" alt="" />

  <img class="qm" src="../img/question-mark.svg" alt="" />
  <!-- <img class="blob" src="../img/blob.png" alt="" /> -->
  <img class="basket" src="../ico/cart2.svg" alt="" />

  <ul>
    <li>Home</li>
    <!-- <li>Shop</li> -->
    <li>Ingredients</li>

    <li>Contact</li>
  </ul>
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
ul li {
  font-size: 2rem;
}
ul li:hover {
  cursor: pointer;
}
.logo {
  height: 6rem;
  position: absolute;
  top: 1.7rem;
  left: 14.2rem;
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
.basket:hover {
  scale: 1.05;
}
.qm {
  width: 2rem;
  position: absolute;
  right: 17rem;
  top: 3.8rem;
}
</style>
