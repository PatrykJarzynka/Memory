<script setup lang="ts">
  const wordBank = ['wspomnienia', 'przyszłość', 'bliskich', 'czas']
  const currentWordIndex = ref<number>(0)

  onMounted(() => {
    setInterval(() => {
      currentWordIndex.value = (currentWordIndex.value + 1) % wordBank.length;
    }, 1000);
  })
</script>

<template>
  <v-sheet class="hero-container">
    <p class="hero-title">Alzheimer zabiera <br> {{wordBank[currentWordIndex]}}<br> My walczymy o każde z nich.</p>

    <div class="circles-wrapper">
      <div class="outer-circle"/>
      <div class="inner-circle"/>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">

  .hero-container {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    padding-block: 50px;
    font-size: 60px;
    font-weight: bold;
    color: rgb(var(--v-theme-primary));
    text-align: center;
  }

  .circles-wrapper {
    position: relative;
    width: 1500px;
    height: 750px;
  }

  .outer-circle {
    width: 100%;
    height: 100%;
    background-color: rgb(var(--v-theme-primary));
    border-radius: 750px 750px 0 0;
    opacity: 0.3;
  }

  .inner-circle {
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 1100px;
    height: 550px;
    background-color: rgb(var(--v-theme-primary));
    border-radius: 550px 550px 0 0;
    opacity: 1;
  }

</style>
