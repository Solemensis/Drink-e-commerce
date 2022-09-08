<script setup>
import Modal from "./Modal.vue";
import Modal2 from "./Modal2.vue";
import Modal3 from "./Modal3.vue";
import { ref } from "vue";

const showModal1 = ref(false);
const showModal2 = ref(false);
const showModal3 = ref(false);
</script>

<template>
  <div>
    <img class="blob" src="../img/blob.png" alt="" />
    <img
      @mouseenter="showModal1 = true"
      @mouseleave="showModal1 = false"
      src="../img/1.png"
    />
    <img class="blob2" src="../img/blob.png" alt="" />
    <img
      @mouseenter="showModal2 = true"
      @mouseleave="showModal2 = false"
      src="../img/2.png"
    />
    <img class="blob3" src="../img/blob.png" alt="" />
    <img
      @mouseenter="showModal3 = true"
      @mouseleave="showModal3 = false"
      src="../img/3.png"
    />
  </div>
  <Modal class="modal" v-show="showModal1" />
  <Modal2 class="modal2" v-show="showModal2" />
  <Modal3 class="modal3" v-show="showModal3" />
</template>

<style scoped>
.blob {
  position: absolute;
  top: -2%;
  right: -5%;
  height: 10rem;
  width: 10rem;
  z-index: -100;
}
.blob2 {
  position: absolute;
  top: 35.5%;
  right: -4%;
  height: 10rem;
  width: 10rem;
  z-index: -100;
}
.blob3 {
  position: absolute;
  top: 73%;
  right: -5%;
  height: 10rem;
  width: 10rem;
  z-index: -100;
}
div {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4rem;
  position: absolute;
  right: 5rem;
  top: 53.2%;
  transform: translate(0, -50%);
}

img {
  width: 9rem;
  height: 9rem;
}

.modal {
  position: absolute;
  right: 18rem;
  top: 39%;

  width: 15rem;
  height: 16rem;
}
.modal2 {
  position: absolute;
  right: 18rem;
  top: 52%;
  width: 15rem;
  height: 16rem;
}
.modal3 {
  position: absolute;
  right: 18rem;
  top: 63%;
  width: 15rem;
  height: 16rem;
}
</style>
