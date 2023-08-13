<script setup>
import { defineProps } from "vue";

const props = defineProps({
  heading: String,
  content: String,
});
</script>

<template>
  <div>
    <Transition name="modal">
      <div class="group">
        <h4>{{ heading }}</h4>
        <p>{{ content }}</p>
        <div id="triangle-right"></div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.group {
  background-color: #2eaa2727;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  position: relative;
}
#triangle-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -2.4rem;
  border-top: 1rem solid transparent;
  border-left: 2.5rem solid #2eaa2727;
  border-bottom: 1rem solid transparent;
}

h4 {
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 1.7rem;
  margin-bottom: 2.5rem;
}
p {
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 1.3rem;
}

/* modal animations */
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
