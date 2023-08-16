<script setup>
import Navbar from "./components/Navbar.vue";
import CartWindow from "./components/Cart/CartWindow.vue";
</script>

<template>
  <div>
    <Navbar />
    <CartWindow />
    <RouterView v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped></style>
