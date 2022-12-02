<script setup>
import { amountStore } from "../../../stores/Stores";

const decrease = function () {
  if (amountStore().can3 >= 1) amountStore().can3 = amountStore().can3 - 1;
};
</script>

<template>
  <div>
    <div class="choose">
      <img class="option" src="../../img/magic.png" alt="" />
      <p class="fruit">Pure <br /><span>Magic</span></p>

      <div class="buttons">
        <button class="button" @click="decrease()">⊲</button>
        <p class="amount">{{ amountStore().can3 }}</p>

        <button
          class="button"
          @click="amountStore().can3 = amountStore().can3 + 1"
        >
          ⊳
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (orientation: portrait) {
  .button {
    font-size: 1.8rem !important;
  }
}
* {
  font-family: "DynaPuff";
  font-weight: 300 !important;
}

.fruit {
  font-size: 2rem;
  position: absolute;
  right: 20%;
  top: 15%;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}
span {
  font-size: 2rem;
}

.button {
  z-index: 100;
  font-size: 1.6rem;
  color: #eee;
}

.option {
  position: absolute;
  height: 13rem;
  left: 9%;
  top: 8%;
}
.choose {
  background-color: #8f27e45c;
  border-radius: 1rem;
  position: relative;
  height: 15rem;
  width: 20rem;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  border: 1px solid #6e25aa5c;
}

.amount {
  font-size: 2.2rem;
  font-weight: 600;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  position: absolute;
  right: 8.2%;
  bottom: 18%;
}

.buttons button {
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background-color: #c009c0;
  border-radius: 22rem;
  transition: 0.1s;
  z-index: 9999999999;
}
@media (hover: hover) {
  .buttons button:hover {
    background-color: #9f119f;
  }
}
.buttons button:active {
  background-color: #851185;
}
.buttons button img {
  width: 1rem;
  height: 1rem;
}
.down-arrow {
  transform: rotate(90deg);
}
.up-arrow {
  transform: rotate(270deg);
}
</style>
