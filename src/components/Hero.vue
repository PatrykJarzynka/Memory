<script setup lang="ts">
const wordBank = ['wspomnienia', 'przyszłość', 'młodość', 'czas', 'bliskich']
const currentWordIndex = ref<number>(0)

const visible = ref(true)
const currentWord = computed(() => wordBank[currentWordIndex.value])

onMounted(() => {
  setInterval(() => {
    visible.value = false
    setTimeout(() => {
      currentWordIndex.value = (currentWordIndex.value + 1) % wordBank.length
      visible.value = true
    }, 800) // czas na animację "wyjścia"
  }, 2800) // 1 sekunda widoczne + 0.3s animacji
})
</script>

<template>
  <v-sheet class="hero-container">
    <div class="py-15 d-flex flex-column align-center">
      <div class="d-flex ga-5">
        <p class="hero-text">Alzheimer zabiera </p>
      </div>

      <div class="highlighted-word-container">
        <transition name="slide">
            <span
              v-if="visible"
              :key="currentWord"
              class="highlighted-word"
            >
              {{currentWord}}
            </span>
        </transition>
      </div>

      <p class="hero-text">My walczymy o każde z nich.</p>
    </div>

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

.hero-text {
  font-size: 60px;
  font-weight: bold;
  color: rgb(var(--v-theme-primary));
  text-align: center;
}

.highlighted-word-container {
  position: relative;
  width: 420px;
  height: 70px;
  overflow: hidden;
  border: 1px solid black;
  box-shadow: inset 0px 0px 15px -4px rgba(66, 68, 90, 1);
  border-radius: 15px;
}

.highlighted-word {
  @extend .hero-text;
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


/* Wejście z góry */
.slide-enter-from {
  transform: translate(-50%, -150%);
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.8s ease;
}
.slide-enter-to {
  transform: translate(-50%, -50%);
  opacity: 1;
}

/* Wyjście w dół */
.slide-leave-from {
  transform: translate(-50%, -50%);
  opacity: 1;
}
.slide-leave-active {
  transition: all 0.8s ease;
}
.slide-leave-to {
  transform: translate(-50%, 150%);
  opacity: 0;
}

</style>
