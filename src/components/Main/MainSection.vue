<script setup>
import DrinkProduct from "../Products/DrinkProduct.vue";

import { amountStore } from "../../../stores/Stores";
import { boolStore } from "../../../stores/Stores";
import { computed } from "vue";

import productImg1 from "@/assets/green.png";
import productImg2 from "@/assets/red.png";
import productImg3 from "@/assets/magic.png";
import productImg4 from "@/assets/kafein.png";

const totalPrice = computed(() => amountStore().totalPrice);
</script>
<template>
  <section class="main-section">
    <div class="main-hero">
      <div class="main-text-box">
        <h2 class="big-text">
          Be Your <br /><span class="color-span-1">Best</span> Self
        </h2>
        <h1 class="mid-text">
          An <span class="color-span-2">Intense</span> Energy Drink
        </h1>
        <h3 class="small-text">w/ minimal sugar</h3>
      </div>
      <div class="main-pricing">
        <h3 class="total-price-heading">
          Total :
          <span class="color-span-3">${{ totalPrice }}.00</span>
        </h3>
        <button
          @click="boolStore().showCartWindow = !boolStore().showCartWindow"
        >
          Checkout
        </button>
      </div>
    </div>

    <div class="main-products-grid">
      <DrinkProduct
        product="can1"
        productName="Melon"
        productNameExtra="Tree"
        :productImg="productImg1"
        bgColor="#2cdd235d"
      />
      <DrinkProduct
        product="can2"
        productName="Red"
        productNameExtra="Power"
        :productImg="productImg2"
        bgColor="#cb27aa5e"
      />
      <DrinkProduct
        product="can3"
        productName="Pure"
        productNameExtra="Magic"
        :productImg="productImg3"
        bgColor="#8f27e45c"
      />
      <DrinkProduct
        product="can4"
        productName="Boost"
        productNameExtra="NRG"
        :productImg="productImg4"
        bgColor="#e0660f46"
      />

      <img
        class="products-background-shapes"
        src="@/img/spline.png"
        alt="rounded background shapes"
      />
    </div>
    <img class="spiral" src="@/img/spiral.webp" alt="spiral image" />
  </section>
</template>

<style scoped>
.spiral {
  width: 60rem;
  position: absolute;
  left: -58.5rem;
  top: -6.7rem;
  z-index: -11;
}
.main-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 43%;
  top: 54%;
  transform: translate(-50%, -50%);
}

.main-hero {
  padding: 2.5rem;
  border-left: 3px rgb(144, 26, 223) solid;
}
.total-price-heading {
  font-size: 3.9rem;
  font-weight: 300;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.8rem;
  margin-bottom: 3rem;
}
.color-span-3 {
  font-weight: 600;
  color: #35b0d2;
}
.main-pricing button {
  background-color: #30d361;
  color: white;
  padding: 1.5rem 2.5rem;
  padding-left: 5.5rem;
  font-weight: 600;
  border-radius: 2222rem;
  border: none;
  font-size: 1.5rem;
  transition: 0.2s;
  font-weight: 700;
  position: relative;
}
.main-pricing button::before {
  content: "";
  position: absolute;
  background: url("../../ico/etiket.svg") no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  background-size: 3.5rem;
  /* display: block; */
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
}
@media (hover: hover) {
  button:hover {
    background-color: #0daa3cc3;
  }
}
button:active {
  background-color: #0daa3c;
}
img {
  width: 3.8rem;
  margin-left: -1.8rem;
  margin-top: -0.9rem;
  position: absolute;
}
.main-text-box {
  width: 50rem;
  z-index: 99999;
}
.big-text {
  font-size: 8rem;
  font-weight: 300;
  margin-bottom: 3rem;
  font-family: backToSchool;
  line-height: 7.5rem;
}
.color-span-1 {
  color: #df8a44;
}
.mid-text {
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 0.7rem;
}
.color-span-2 {
  color: #e71b1b;
  font-weight: 500;
}
.small-text {
  font-size: 1.9rem;
  font-weight: 300;
  margin-bottom: 6rem;
  text-align: end;
  width: 30rem;
}
/* -------------------- */
.main-products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  position: relative;
}
.products-background-shapes {
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, 50%); */
  height: 47rem;
  width: 65rem;
  z-index: -9999999999999999999999;
  animation: float 4s infinite alternate ease-in-out;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1rem);
  }
}

@media (orientation: portrait) {
  .main-section {
    flex-direction: column;
    top: 50%;
    left: 50% !important;
    gap: 4rem;
    transform: translate(-50%, -50%);
    max-height: 90vh;
  }
  .main-hero {
    border: none !important;
  }
  .main-text-box {
    width: max-content !important;
  }
  .big-text {
    text-align: center;
    font-size: clamp(9rem, 8vh, 15rem);
    line-height: clamp(7rem, 7vh, 13rem);
    margin-bottom: 2.5rem !important;
  }
  .mid-text {
    text-align: center;
    font-size: 4.3rem !important;
    margin-bottom: 1rem !important;
  }
  .small-text {
    width: max-content !important;
    margin-inline: auto;
    margin-bottom: 4rem !important;
    font-size: 2.9rem !important;
    color: #bbb !important;
  }
  .main-pricing {
    width: max-content !important;
    margin-inline: auto;
  }

  .spiral {
    display: none;
  }
  .main-pricing button {
    font-size: 2.3rem !important;
    width: 100% !important;
  }
}
</style>
