<script setup></script>

<template>
  <div>
    <Transition name="modal">
      <div class="wrapper">
        <div class="group">
          <h4>Heading 3</h4>
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
  padding: 1.5rem 1rem;
  border-radius: 1rem;
}
#triangle-right {
  position: absolute;
  top: 6rem;
  right: -2.4rem;
  border-top: 1rem solid transparent;
  border-left: 2.4rem solid #2eaa2727;
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
