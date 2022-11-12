<script setup></script>

<template>
  <div>
    <Transition name="modal">
      <div class="wrapper">
        <div class="group">
          <h1>Lorem, ipsum.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div id="triangle-right"></div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.wrapper {
  transition: 0.2s;
}
.group {
  background-color: #2eaa2727;
  padding: 1.5rem 1.5rem;
  border-radius: 1rem;
}
#triangle-right {
  position: absolute;
  top: 7.2rem;
  right: -2.8rem;
  border-top: 1.4rem solid transparent;
  border-left: 2.8rem solid #2eaa2727;
  border-bottom: 1.4rem solid transparent;
}

h1 {
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 2rem;
  margin-bottom: 4rem;
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
