<script setup>
import BuyButton from "./BuyButton.vue";
import Header from "./Header.vue";
import ecommerce from "./ecommerce.vue";
import DrinkOption from "./DrinkOption.vue";
import DrinkOption2 from "./DrinkOption2.vue";
import DrinkOption3 from "./DrinkOption3.vue";
import DrinkOption4 from "./DrinkOption4.vue";
import { boolStore } from "../../stores/CartStore";
import { amountStore } from "../../stores/CartStore";
function totalAmount() {
  return amountStore().totalPrice;
}
</script>

<template>
  <div style="overflow: hidden !important">
    <ecommerce />

    <div class="left-section">
      <div class="grid1"><Header /> <BuyButton /></div>
      <div class="grid2">
        <div class="header">
          <Header />
          <div class="pricing">
            <h3 class="total">
              Total : <span>&nbsp;${{ totalAmount() }}.00</span>
            </h3>
            <!-- <div class="anan">
        <h3>{{ products[0].amount }}</h3>
        <h3>{{ products[1].amount }}</h3>
        <h3>{{ products[2].amount }}</h3>
        <h3>{{ products[3].amount }}</h3>
      </div> -->

            <div class="button-box">
              <button @click="boolStore().bool = true">
                <img
                  src="../ico/etiket.svg "
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout
              </button>
            </div>
          </div>
        </div>

        <div class="product-group">
          <DrinkOption />
          <DrinkOption2 />
          <DrinkOption3 />
          <DrinkOption4 />
          <img
            data-aos="zoom-in"
            data-aos-duration="1200"
            class="spline-png2"
            src="../img/spline.png"
            alt=""
          />
        </div>
      </div>
      <img
        data-aos="fade-right"
        data-aos-duration="600"
        class="spiral"
        src="../img/spiral.webp"
      />
    </div>
  </div>
</template>

<style scoped>
.spline-png2 {
  display: none;
}
.grid2 {
  display: none;
}

@media (orientation: portrait) {
  .spline-png2 {
    display: block !important;
    position: absolute;
    left: -20%;
    top: -23%;
    height: 47rem;
    width: 65rem;
    z-index: -9999999999999999999999;
    animation: float 4s infinite alternate ease-in-out;
  }
  .spiral {
    left: -45rem !important;
    width: 120rem !important;
    top: -35rem !important;
    transform: rotate(-7deg) !important;
    opacity: 0.3 !important;
    filter: blur(20px);
    display: none;
  }
  .left-section {
    top: 42rem !important;
    border-left: none !important;
    padding: 1rem !important;
  }
  .grid1 {
    display: none !important;
  }
  .grid2 {
    display: flex;
    gap: 10rem;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: end;
    align-items: end;
    position: absolute;
    left: 124.5%;
    top: 2900%;
  }
  .product-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    position: relative;
    margin-top: 0.1rem;
  }
  .header {
    text-align: center !important;
    display: inline-block !important;
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
    font-size: 2rem;
    transition: 0.2s;
    font-family: "Noto Sans";
    font-weight: 700;
    margin-top: 1rem;
  }
  img {
    width: 4.4rem;
    margin-left: -1.8rem;
    margin-top: -0.9rem;
    position: absolute;
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
}
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
  left: 16rem;
  top: 51.5%;
  transform: translate(0, -50%) !important;
  width: 25%;
  /* background-color: rgba(26, 209, 23, 0.284);*/
  margin-top: 1.6rem;

  padding: 2.5rem;
  border-left: 3px rgb(144, 26, 223) solid;
}
.grid1 {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
