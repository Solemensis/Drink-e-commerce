<script setup>
import { ref } from "vue";
import { db } from "../firebaseee/index.js";
import { collection, addDoc } from "firebase/firestore";
import Modal from "./ConfirmModal.vue";

const props = defineProps({
  msg: Boolean,
  products: Array,
  total: Number,
});

const showModal = ref(false);

const firstName = ref("");
const lastName = ref("");
const street = ref("");
const postalCode = ref("");
const phone = ref("");
const mail = ref("");
const address = ref("");

const cardHolder = ref("");
const digit = ref("");
const expirationMM = ref("");
const expirationYY = ref("");
const cvv = ref("");

function sendToFirebase() {
  addDoc(collection(db, "orders"), {
    Products: props.products,
    Total: `$${props.total}.00`,
    Address: {
      firstName: firstName.value,
      lastName: lastName.value,
      street: street.value,
      postalCode: postalCode.value,
      phone: phone.value,
      mail: mail.value,
      address: address.value,
    },
    Payment: {
      cardHolder: cardHolder.value,
      digit: digit.value,
      expirationMM: expirationMM.value,
      expirationYY: expirationYY.value,
      cvv: cvv.value,
    },
  });
}
</script>

<template>
  <Transition name="modal">
    <div v-show="msg" class="window">
      <div class="flex">
        <div>
          <h2>Cart Summary</h2>
          <div class="object">
            <div class="green">
              <p>
                <span>Melon Tree</span>
                <span>{{ products[0].amount }}</span>
              </p>
            </div>
            <div class="red">
              <p>
                <span>Strawberry Waterfall</span>
                <span>{{ products[1].amount }}</span>
              </p>
            </div>
            <div class="purple">
              <p>
                <span>Pure Magic</span>
                <span>{{ products[2].amount }}</span>
              </p>
            </div>
            <div class="brown">
              <p>
                <span>++ Caffeine</span>
                <span>{{ products[3].amount }}</span>
              </p>
            </div>
          </div>
          <div class="credit-card">
            <div class="front">
              <input
                v-model="cardHolder"
                class="card-holder-name"
                placeholder="Card Holder Name"
                type="text"
                required
              />
              <div class="flex2">
                <input
                  disabled="true"
                  class="xxxx"
                  placeholder="****"
                  type="text"
                  required
                />
                <input
                  disabled="true"
                  class="xxxx"
                  placeholder="****"
                  type="password"
                  required
                />
                <input
                  disabled="true"
                  class="xxxx"
                  placeholder="****"
                  type="password"
                  required
                />
                <input
                  v-model="digit"
                  class="xxxx"
                  placeholder="xxxx"
                  type="text"
                  required
                />
              </div>

              <div class="flex3">
                <input
                  v-model="expirationMM"
                  class="tarih"
                  placeholder="MM"
                  type="text"
                  required
                />
                <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                <input
                  v-model="expirationYY"
                  class="tarih"
                  placeholder="YY"
                  type="text"
                  required
                />
              </div>
              <img class="cc-icon" src="../img/cc-icon.png" />
            </div>
            <div class="back">
              <div class="stripe"></div>
              <input
                v-model="cvv"
                class="cvv"
                placeholder="cvv"
                type="password"
                required
              />
            </div>
          </div>
        </div>
        <div class="seperater"></div>
        <div>
          <h2>Address</h2>

          <div @click="$emit('close')" class="cancel">&#128473;</div>

          <form action="" method="get">
            <div>
              <input
                v-model="firstName"
                placeholder="First Name"
                type="text"
                required
              />
            </div>
            <div>
              <input
                v-model="lastName"
                placeholder="Last Name"
                type="text"
                required
              />
            </div>

            <div>
              <input placeholder="USA" type="text" disabled="true" required />
            </div>
            <div>
              <input
                placeholder="New York City"
                type="text"
                disabled="true"
                required
              />
            </div>
            <div>
              <input
                v-model="street"
                placeholder="Street"
                type="text"
                required
              />
            </div>
            <div>
              <input
                v-model="postalCode"
                placeholder="Postal Code"
                type="text"
                required
              />
            </div>

            <div>
              <input v-model="phone" placeholder="Phone" type="text" required />
            </div>
            <div>
              <input
                v-model="mail"
                placeholder="E-mail"
                type="email"
                required
              />
            </div>
            <textarea
              v-model="address"
              placeholder="Address"
              class="textarea"
            ></textarea>
          </form>
        </div>
        <p class="total">
          <nobr>
            Total: <span class="totalspan">${{ total }}.00</span></nobr
          >
        </p>
        <button
          @click="(showModal = true), sendToFirebase()"
          :disabled="total === 0"
          class="send"
        >
          Pay
        </button>
      </div>
      <!-- <Teleport to="body"> -->
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </modal>
      <!-- </Teleport> -->
    </div>
  </Transition>
</template>

<style scoped>
* {
  font-family: "DynaPuff";
  font-weight: 300 !important;
}
.total {
  font-size: 3rem !important;
  position: absolute;
  bottom: 3rem;
  right: 19rem;
  border-bottom: 2px orangered solid;

  padding: 0.5rem 1rem;
}
totalspan {
  font-weight: 600;
}

.wrapper {
  position: absolute;
  bottom: 7rem;
  right: 7.5rem;
}
.radio {
  margin-bottom: 0 !important;
}
.radio-div {
  display: flex;
  width: 10rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 600;
}
.send {
  position: absolute;
  right: 7rem;
  bottom: 3.5rem;
  /*bottom: 2rem; */
  padding: 1rem 3rem;
  background-color: rgb(228, 49, 145);
  color: white;
  border-radius: 2rem;
  border: 1px black solid;
  font-weight: 600;

  font-size: 1.5rem;
  transition: 0.2s;
}

.send:hover {
  background-color: rgb(187, 40, 118);
}
.send:active {
  background-color: rgb(127, 25, 80);
}

.send:disabled,
.send[disabled],
.send:disabled:hover {
  background-color: rgb(212, 144, 180);
  cursor: not-allowed;
}

.cart-images {
  width: 2rem;
}

.cc-icon {
  height: 4.2rem;
  position: absolute;
  right: 1.9rem;
  bottom: 1.2rem;
  border-radius: 200rem;
}

.flex {
  display: flex;
  justify-content: space-evenly;
}

.flex2 {
  display: flex;
  justify-content: space-between;
  width: 22rem;
  position: absolute;
  left: 3.4rem;
  top: 7.3rem;
}

.flex3 {
  display: flex;

  position: absolute;
  left: 2rem;
  bottom: -0.35rem;
}
.flex p {
  font-size: 1.4rem;
}
.object {
  margin-bottom: 5rem;
}

.object p {
  font-size: 2rem;
  font-weight: 500;
  padding: 0 0.5rem;
  color: #310e0e;
}

.object {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.7rem;
  width: 35rem;
  justify-items: center;
  position: absolute;
  left: 4.5rem;
  top: 11rem;
}
.object div {
  width: 100%;
  height: 3.5rem;

  border-radius: 1rem;
  padding: 0.6rem;
  border: 1px solid black;
}

.object div p {
  display: flex;
  justify-content: space-between;
}
.green {
  background-color: #2cdd235d;
}
.red {
  background-color: #cb27aa5e;
}
.purple {
  background-color: #8f27e45c;
}
.brown {
  background-color: #e0660f46;
}
.xxxx {
  width: 4.7rem;
  height: 2.3rem;
  font-size: 1.6rem;
}

.cvv {
  width: 4.7rem;
  height: 2.3rem;
  font-size: 1.7rem;
  position: absolute;
  right: 1.1rem;
  bottom: 1.5rem;
}

.tarih {
  width: 3.5rem;
  height: 2.3rem;
  font-size: 1.4rem;
}

.card-holder-name {
  width: 25rem;
  height: 3rem;
  position: absolute;
  left: 1.85rem;
  top: 1.9rem;
}
.front {
  background-color: #91b4bd;
  width: 29rem;
  height: 17rem;
  padding: 1.5rem;
  border-radius: 1rem;
  position: absolute;
  left: 4rem;
  bottom: 3.5rem;
  border: 1px solid black;
}

.back {
  background-color: #e1e4b3;
  width: 29rem;
  height: 17rem;
  padding: 1.5rem;
  border-radius: 1rem;
  position: absolute;
  left: 11rem;
  bottom: 2rem;
  border: 1px solid black;
  z-index: -1;
}
.stripe {
  background-color: #272727;
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  right: 0;
  top: 2.5rem;
}

.cancel {
  position: absolute;
  right: 2rem;
  top: 1rem;
  font-size: 3rem;
  cursor: pointer;
}
.form1 {
  grid-column-start: 1;
  grid-column-end: 3;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}

.textarea {
  resize: none;
  width: 34.6rem;
  height: 8rem;
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  border: 1px black solid;
  outline: none;
  transition: 0.2s;
  padding: 0.2rem;
}

.textarea:focus {
  border: 1px rgb(247, 140, 25) solid;
}
input {
  margin-bottom: 2.5rem;
  width: 15rem;
  font-size: 1.6rem;
  border: 1px black solid;
  padding: 0.2rem;
  border-radius: 0.4rem;
  outline: none;
  transition: 0.2s;
}
input:focus {
  border: 1px rgb(247, 140, 25) solid;
}

.seperater {
  height: 70%;
  width: 0.3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(95, 95, 95);
}

.flex {
  display: flex;
  justify-content: space-around;
}

.flex h2 {
  font-size: 4rem;
  color: rgb(248, 62, 62);
  text-align: center;
  margin-bottom: 3.2rem;
  width: 39rem;
  font-family: "Rubik Dirt";
  font-weight: 300;
}
.window {
  height: 50rem;
  width: 88rem;
  background-color: rgba(111, 139, 249, 0.177);
  padding: 3rem 1rem;
  backdrop-filter: blur(3rem);
  border-radius: 2rem;
  z-index: 10000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

/* animations */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
