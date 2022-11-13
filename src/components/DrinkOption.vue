<script setup>
import { ref } from "vue";

const amount = ref(0);
</script>

<template>
  <div>
    <div class="choose">
      <img class="option" src="../img/green.png" alt="" />
      <p class="fruit">Melon <br /><span>Tree</span></p>

      <div class="buttons">
        <button
          class="button"
          @click="
            amount >= 0 ? amount-- : null,
              $emit('reduce', amount >= 0 ? 1 : (amount = 0)),
              $emit('amount', amount)
          "
        >
          ⊲
        </button>
        <p class="amount">{{ amount }}</p>
        <button
          class="button"
          @click="amount++, $emit('increment', 1), $emit('amount', amount)"
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
  background-color: #2cdd235d;
  border-radius: 1rem;
  position: relative;
  height: 15rem;
  width: 20rem;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #229a1c5d;
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
}
.buttons button:hover {
  background-color: #9f119f;
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
