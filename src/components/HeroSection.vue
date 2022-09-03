<script setup></script>

<template>
  <section>
    <div>
      <div class="relative"><img class="spiral" src="../img/spiral.png" /></div>

      <!-- <img class="img1" src="../img/red.png" />
      <img class="img2" src="../img/green.png" />
      <img class="blob" src="../ico/blob8.svg" /> -->
    </div>
  </section>
</template>

<style scoped>
.relative {
  position: relative;
  left: -24.4rem;

  width: 80rem;
  height: 80rem;
}
.spiral {
  width: 80rem;
  position: absolute;
  left: -33%;
  top: 2.5rem;
  z-index: -11;
  /*filter: blur(9px);*/
}

.img1 {
  height: 42rem;
  position: absolute;
  left: 55%;
  top: 55%;
  transform: translate(-50%, -50%) rotate(-15deg);
}
.img2 {
  height: 42rem;
  position: absolute;
  left: 62%;
  top: 55%;
  transform: translate(-50%, -50%) rotate(15deg);
}

.blob {
  position: absolute;
  left: 58.5%;
  top: 57%;
  transform: translate(-50%, -50%);
  z-index: -10;
  width: 58rem;
  opacity: 0.4;
}
</style>
