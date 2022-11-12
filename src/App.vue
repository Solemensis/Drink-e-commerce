<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

import Footer from "./components/footer.vue";
</script>

<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <!-- <transition name="fade" mode="out-in"> -->
    <component :is="Component" />
    <!-- </transition> -->
  </RouterView>
  <!-- <Footer /> -->
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
