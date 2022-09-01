<script setup></script>

<template>
  <div class="container">
    <div class="content">
      <img class="left-image" src="../img/logo.png" />
      <p>Built by solemensis @Copyright 2022</p>
      <div class="right-group">
        <img src="../img/logo.png" /> <img src="../img/logo.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #fde1e1;

  width: 100%;
  height: 4rem;
  position: absolute;
  bottom: 0%;
  left: 0%;
}

.left-image {
  position: absolute;
  left: 7rem;
  top: 50%;
  transform: translate(0, -50%);
}
.right-group {
  position: absolute;
  right: 7rem;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: space-between;
  width: 10rem;
}
.content p {
  font-size: 2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.content img {
  width: 3.5rem;
}
</style>
