<script setup>
import { boolStore } from "../../../stores/Stores";
</script>

<template>
  <div>
    <Transition name="fade">
      <div class="container" v-show="boolStore().showSuccessWindow">
        <ol class="modal-content">
          <div
            @click="
              boolStore().showSuccessWindow = !boolStore().showSuccessWindow
            "
            class="cancel"
          >
            ✘
          </div>
          <h2>Payment Was <span>Successful!</span></h2>
          <li>Products will be delivered approximately in 30-60 minutes.</li>
          <li class="last-child">
            Your transaction bill will be sent to your e-mail address.
          </li>
        </ol>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.container {
  transition: opacity 0.2s ease;
  position: fixed;
  z-index: 99231398;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /*display: table;*/
}
.cancel {
  position: absolute;
  right: 2rem;
  top: 1rem;
  font-size: 3rem;
  cursor: pointer;
}
.modal-content {
  color: rgb(239, 239, 239);
  width: 45rem;
  padding: 3rem 6rem;
  font-size: 2rem;
  background-color: rgb(229, 33, 141);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.2s ease;
}

h2 {
  margin-bottom: 4rem;
  text-align: center;
  font-size: 3.5rem;
  letter-spacing: 0.1rem;
}

span {
  color: rgb(33, 255, 33);
}
.modal-content li {
  margin-bottom: 2rem;
  line-height: 2.6rem;
  color: rgb(233, 233, 233);
}
.last-child {
  margin-bottom: 0 !important;
}
</style>
