<script setup>
import DrinkOption from "./DrinkOption.vue";
import DrinkOption2 from "./DrinkOption2.vue";
import DrinkOption3 from "./DrinkOption3.vue";
import DrinkOption4 from "./DrinkOption4.vue";
import CartWindow from "./CartWindow.vue";

// burda objectleri oluşturcaz. checkout basınca, objectlerin bilgilerini drinkoption'lardan buraya emit edicez
// ve ardından hazırlanmış objectleri cardwindow'a prop edicez. hepsi tek click eventle olcak

import { ref } from "vue";

const total = ref(0);
const bool = ref();

const products = ref([
  {
    name: "Melon Tree",
    amount: 0,
  },
  {
    name: "Strawberry Waterfall",
    amount: 0,
  },
  {
    name: "Pure Magic",
    amount: 0,
  },
  {
    name: "++ Caffeine",
    amount: 0,
  },
]);
</script>

<template>
  <Teleport to="body">
    <CartWindow
      :total="total"
      :msg="bool"
      @close="bool = false"
      :products="products"
  /></Teleport>
  <div>
    <div class="wrapper">
      <div class="product-group">
        <DrinkOption
          @amount="(value) => (products[0].amount = value)"
          @increment="(value) => (total += value * 2)"
          @reduce="(value) => (total > 1 ? (total -= value * 2) : null)"
        />
        <DrinkOption2
          @increment="(value) => (total += value * 2)"
          @reduce="(value) => (total > 1 ? (total -= value * 2) : null)"
          @amount="(value) => (products[1].amount = value)"
        />
        <DrinkOption3
          @increment="(value) => (total += value * 2)"
          @reduce="(value) => (total > 1 ? (total -= value * 2) : null)"
          @amount="(value) => (products[2].amount = value)"
        />
        <DrinkOption4
          @increment="(value) => (total += value * 2)"
          @reduce="(value) => (total > 1 ? (total -= value * 2) : null)"
          @amount="(value) => (products[3].amount = value)"
        />
        <!-- <div class="spline">
          <iframe
            src="https://my.spline.design/lightingtoruscopy-777e63b20245a5789fffa9aa66bd050e/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div> -->
        <teleport to="body">
          <img
            data-aos="zoom-in"
            data-aos-duration="800"
            class="spline-png"
            src="../img/spline.png"
            alt=""
          />

          <!-- <img class="big-ball" src="../img/big_ball.png" />

          <img class="big-ball2" src="../img/big_ball.png" />

          <img class="small-ball" src="../img/small_ball.png" /> -->
        </teleport>

        <!-- <img class="circle" src="../img/spiral2.png" /> -->
      </div>
    </div>
    <div class="pricing">
      <h3>
        Total : <span>&nbsp;${{ total }}.00</span>
      </h3>
      <!-- <div class="anan">
        <h3>{{ products[0].amount }}</h3>
        <h3>{{ products[1].amount }}</h3>
        <h3>{{ products[2].amount }}</h3>
        <h3>{{ products[3].amount }}</h3>
      </div> -->

      <button @click="bool = true">
        <img
          src="../ico/etiket.svg "
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout
      </button>
    </div>
  </div>
</template>

<style scoped>
.big-ball {
  position: absolute;
  right: 50%;
  top: 50%;
  width: 888.5rem;

  filter: invert(1);
}

.big-ball2 {
  position: absolute;
  left: 57.3rem;
  top: 32.2rem;
  width: 6.2rem;
  filter: invert(1);
}
.spline-png {
  position: absolute;
  left: -3%;
  top: -5%;
  width: 190rem;
  height: 90.3rem;
  z-index: -99999;
  animation: float 4s infinite alternate ease-in-out;
}

@keyframes float {
  0% {
    height: 90.3rem;
  }
  100% {
    height: 93rem;
  }
}
.spline {
  height: 260rem;
  width: 85rem;
  position: absolute;
  z-index: -551;
  opacity: 0.7;
}

h3 {
  font-size: 3.9rem;
  font-weight: 300;

  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.8rem;
  margin-bottom: 3rem;
  font-family: anan3;
}
span {
  font-weight: 600;
  color: #35b0d2;
}
button {
  background-color: #30d361;
  color: white;
  padding: 1.5rem 2.5rem;
  padding-bottom: 1.6rem;
  margin-left: 0.7rem;
  font-weight: 600;
  border-radius: 2222rem;
  border: none;
  font-size: 1.5rem;
  transition: 0.2s;
  font-family: "Noto Sans";
  font-weight: 700;
}

button:hover {
  background-color: #0daa3cc3;
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

.product-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 40rem;
  width: 60rem;
  position: absolute;
  top: 8%;
  right: -170%;
  padding: 2rem;
}
</style>
