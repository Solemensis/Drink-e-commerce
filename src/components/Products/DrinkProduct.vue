<script setup>
import { amountStore } from "../../../stores/Stores";
import { defineProps } from "vue";

const props = defineProps({
  product: String,
  productName: String,
  productNameExtra: String,
  productImg: String,
  bgColor: String,
});
</script>

<template>
  <div>
    <div class="choose" :style="`background-color: ${bgColor}`">
      <img class="option" :src="productImg" alt="product image" />
      <div class="product-name-and-buttons">
        <p class="fruit">
          {{ productName }}<br /><span>{{ productNameExtra }}</span>
        </p>

        <div class="buttons">
          <button
            class="button"
            @click="
              () =>
                amountStore()[product] <= 0
                  ? (amountStore()[product] = 0)
                  : amountStore()[product]--
            "
          >
            ⊲
          </button>
          <p class="amount">{{ amountStore()[product] }}</p>

          <button class="button" @click="() => amountStore()[product]++">
            ⊳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "DynaPuff";
  font-weight: 300 !important;
}
.fruit {
  font-size: clamp(2rem, 1.5vh, 2.6rem);

  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}

span {
  font-size: clamp(2rem, 1.5vh, 2.6rem);
}
.button {
  z-index: 100;
  font-size: 1.6rem;
  color: #eee;
}

.option {
  height: 80%;
}
.choose {
  border-radius: 1rem;
  position: relative;
  height: 15rem;
  width: 20rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #229a1c5d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
}

.buttons button {
  border: none;
  background-color: #c009c0;
  border-radius: 22rem;
  transition: 0.1s;
  z-index: 9999999999;
  padding: 0.5rem;
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
.product-name-and-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media (orientation: portrait) {
  .amount {
    font-size: 2.7rem;
  }
  .buttons {
    gap: 1rem;
  }
  .button {
    font-size: 2rem !important;
  }
  .fruit {
    font-size: 2.3rem;
  }
  span {
    font-size: 2.3rem;
  }

  /* .choose {
    height: clamp(15rem, 15vh, 20rem);
    width: clamp(20rem, 15vh, 30rem);
  } */
}
</style>
