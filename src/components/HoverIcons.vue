<script setup>
import Modal from "./Modal/HiddenModal.vue";

import { ref } from "vue";

const showModal1 = ref(false);
const showModal2 = ref(false);
const showModal3 = ref(false);
</script>

<template>
  <div class="relative">
    <div>
      <div class="section-class">
        <div class="box">
          <img class="blob" src="../img/blob.png" alt="" />
          <img
            @mouseenter="showModal1 = true"
            @mouseleave="showModal1 = false"
            src="../img/1.png"
          />
          <transition name="fade" mode="out-in">
            <Modal
              heading="Heading 1"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing."
              class="modal1"
              v-show="showModal1"
            />
          </transition>
        </div>

        <div class="box">
          <img class="blob2" src="../img/blob.png" alt="" />
          <img
            @mouseenter="showModal2 = true"
            @mouseleave="showModal2 = false"
            src="../img/2.png"
          />
          <transition name="fade" mode="out-in">
            <Modal
              heading="Heading 2"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing."
              class="modal2"
              v-show="showModal2"
            />
          </transition>
        </div>
        <div class="box">
          <img class="blob3" src="../img/blob.png" alt="" />
          <img
            @mouseenter="showModal3 = true"
            @mouseleave="showModal3 = false"
            src="../img/3.png"
          />
          <transition name="fade" mode="out-in">
            <Modal
              heading="Heading 3"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing."
              class="modal3"
              v-show="showModal3"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: relative;
}
.section-class {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4rem;
  position: absolute;
  right: 2rem;
  top: 53.8%;
  transform: translateY(-50%) !important;
  z-index: 9;
}
@media (orientation: portrait) {
  .section-class {
    display: none;
  }
}
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
  top: -5%;
  right: -4%;
  height: 10rem;
  width: 10rem;
  z-index: -100;
}
.blob3 {
  position: absolute;
  top: -2%;
  right: -5%;
  height: 10rem;
  width: 10rem;
  z-index: -100;
}

img {
  width: 9rem;
  height: 9rem;
}

.modal1 {
  position: absolute;
  right: 12rem;
  top: -15%;
  z-index: 99999;
  width: 15rem;
  height: 16rem;
}
.modal2 {
  position: absolute;
  right: 12rem;
  top: -25%;
  width: 15rem;
  height: 16rem;
  z-index: 99999;
}
.modal3 {
  position: absolute;
  right: 12rem;
  top: -25%;
  width: 15rem;
  height: 16rem;
  z-index: 99999;
}
</style>
