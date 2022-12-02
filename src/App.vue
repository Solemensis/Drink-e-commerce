<script setup>
import Navbar from "./components/Navbar.vue";
// **** website first-load opacity animation ****
</script>

<template>
  <div>
    <Navbar />
    <RouterView v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped></style>
