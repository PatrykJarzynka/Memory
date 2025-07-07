<script setup lang="ts">
  const wordBank = ["wspomnienia", "przyszłość", "młodość", "czas", "bliskich"]
  const currentWordIndex = ref<number>(0)

  // const visible = ref(true)
  // const currentWord = computed(() => wordBank[currentWordIndex.value])
  //
  // onMounted(() => {
  //   setInterval(() => {
  //     visible.value = false
  //     setTimeout(() => {
  //       currentWordIndex.value = (currentWordIndex.value + 1) % wordBank.length
  //       visible.value = true
  //     }, 800) // czas na animację "wyjścia"
  //   }, 2800) // 1 sekunda widoczne + 0.3s animacji
  // })
</script>

<template>
  <div class="hero-container">
    <v-row
      no-gutters
      class="h-100 hero-main-row"
    >
      <v-col class="d-flex align-center">
        <div class="hero-left-column-wrapper">
          <div class="hero-text-container">
            <h1 class="hero-title">Zanim dogoni nas czas - działamy</h1>

            <p class="hero-description">W naszej rodzinie Alzheimer zaczyna się w wieku 30–40 lat.
              Wiemy, że nie mamy czasu – ale mamy nadzieję.</p>
          </div>

          <div class="hero-action-buttons">
            <v-btn
              size="large"
              class="hero-button"
            >
              Wesprzyj
            </v-btn>

            <v-btn
              variant="text"
              size="large"
              class="hero-button--flat"
            >
              Poznaj historie

              <template #append>
                <v-icon class="pt-1" icon="mdi-arrow-right-thin"/>
              </template>
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col class="h-100">
        <v-row
          no-gutters
          class="ga-5 h-100"
        >
          <v-col class="d-flex flex-column ga-5 h-100">
            <v-img src="/images/hero-img-h1.jfif" class="grid-item" aspect-ratio="2" cover/>
            <v-img src="/images/hero-img-v1.jfif" class="grid-item tall" aspect-ratio="1" cover/>
          </v-col>

          <v-col class="d-flex flex-column ga-5 my-8">
            <v-img src="/images/hero-img-v2.jfif" class="grid-item" aspect-ratio="0.8" cover/>
            <v-img src="/images/hero-img-h2.jfif" class="grid-item tall" aspect-ratio="2" cover/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>

  <!--    <div class="py-15 d-flex flex-column align-center">-->
  <!--      <div class="d-flex ga-5">-->
  <!--        <p class="hero-text">Alzheimer zabiera</p>-->
  <!--      </div>-->

  <!--      <div class="highlighted-word-container">-->
  <!--        <transition name="slide">-->
  <!--          <span-->
  <!--            v-if="visible"-->
  <!--            :key="currentWord"-->
  <!--            class="highlighted-word"-->
  <!--          >-->
  <!--            {{ currentWord }}-->
  <!--          </span>-->
  <!--        </transition>-->
  <!--      </div>-->

  <!--      <p class="hero-text">My walczymy o każde z nich.</p>-->
  <!--    </div>-->

  <!--    <div class="circles-wrapper">-->
  <!--      <div class="outer-circle"/>-->
  <!--      <div class="inner-circle"/>-->
  <!--    </div>-->
</template>

<style scoped lang="scss">

.hero-container {
  background-color: rgb(var(--v-theme-primary));
  width: 100%;
  height: 80%;
  border-radius: 24px;
  padding: 50px 120px;
}

.hero-main-row {
  gap: 90px;
}

.hero-left-column-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 70px;
}

.hero-text-container {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.hero-title {
  color: white;
  font-size: 67px;
  font-weight: 100;
  line-height: 85px;
  font-family: Playfair Display, serif;
}

.hero-description {
  color: white;
  font-size: 20px;
}

.hero-text {
  font-size: 60px;
  font-weight: bold;
  color: rgb(var(--v-theme-primary));
  text-align: center;
}

.hero-action-buttons {
  display: flex;
  column-gap: 30px;
}

.hero-button {
  text-transform: none;
  color: rgb(var(--v-theme-primary));

  &--flat {
    @extend .hero-button;
    color: white;
  }
}

.grid-item {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.tall {
  grid-row: span 2;
}

.wide {
  grid-column: span 2;
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
