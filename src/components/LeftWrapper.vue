<script setup>
import BuyButton from "./BuyButton.vue";
import Header from "./Header.vue";
import ecommerce from "./ecommerce.vue";
import DrinkOption from "./DrinkOption.vue";
import DrinkOption2 from "./DrinkOption2.vue";
import DrinkOption3 from "./DrinkOption3.vue";
import DrinkOption4 from "./DrinkOption4.vue";
</script>

<template>
  <div>
    <ecommerce />

    <div class="left-section">
      <div class="grid1"><Header /> <BuyButton /></div>
      <div class="grid2">
        <div class="header">
          <Header />
          <div class="pricing">
            <h3 class="total">
              Total : <span>&nbsp;${{ total }}.00</span>
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
        </div>
      </div>
      <img
        data-aos="fade-right"
        data-aos-duration="600"
        class="spiral"
        src="../img/spiral.png"
      />
    </div>
  </div>
</template>

<style scoped>
@media (orientation: portrait) {
  .spiral {
    left: -117rem !important;
    width: 120rem !important;
    top: -20rem !important;
  }
  .left-section {
    top: 40rem !important;
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
    left: 125%;
    top: 2600%;
  }
  .product-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
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
    font-size: 1.5rem;
    transition: 0.2s;
    font-family: "Noto Sans";
    font-weight: 700;
  }
  img {
    width: 3.8rem;
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
  left: 17rem;
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
