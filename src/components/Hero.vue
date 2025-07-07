<script setup lang="ts">
import {useDisplay} from "vuetify/framework";

const { md, lg, xl, xxl } = useDisplay()
</script>

<template>
  <div class="hero-container">
    <v-row v-if="md || lg || xl || xxl">
      <v-col>
        <div class="hero-content">
          <h1 class="hero-title">Zanim dogoni nas czas - działamy</h1>

          <p class="hero-description">W naszej rodzinie Alzheimer zaczyna się w wieku 30–40 lat. Wiemy, że nie mamy czasu – ale mamy nadzieję.</p>

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

      <v-col>
        <v-img src="/images/hero-img-h1.jfif" class="hero-image" cover/>
      </v-col>
    </v-row>

    <div v-else>
      <v-img src="/images/hero-img-h1.jfif" class="hero-image" cover/>

      <div class="hero-content">
        <h1 class="hero-title">Zanim dogoni nas czas - działamy</h1>

        <p class="hero-description">W naszej rodzinie Alzheimer zaczyna się w wieku 30–40 lat. Wiemy, że nie mamy czasu – ale mamy nadzieję.</p>

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
    </div>

        <!--    <v-row-->
<!--      no-gutters-->
<!--      class="h-100 hero-main-row"-->
<!--    >-->
<!--      <v-col class="d-flex align-center">-->
<!--        <div class="hero-left-column-wrapper">-->
<!--          <div class="hero-text-container">-->
<!--            <h1 class="hero-title">Zanim dogoni nas czas - działamy</h1>-->

<!--            <p class="hero-description">W naszej rodzinie Alzheimer zaczyna się w wieku 30–40 lat.-->
<!--              Wiemy, że nie mamy czasu – ale mamy nadzieję.</p>-->
<!--          </div>-->

<!--          <div class="hero-action-buttons">-->
<!--            <v-btn-->
<!--              size="large"-->
<!--              class="hero-button"-->
<!--            >-->
<!--              Wesprzyj-->
<!--            </v-btn>-->

<!--            <v-btn-->
<!--              variant="text"-->
<!--              size="large"-->
<!--              class="hero-button&#45;&#45;flat"-->
<!--            >-->
<!--              Poznaj historie-->

<!--              <template #append>-->
<!--                <v-icon class="pt-1" icon="mdi-arrow-right-thin"/>-->
<!--              </template>-->
<!--            </v-btn>-->
<!--          </div>-->
<!--        </div>-->
<!--      </v-col>-->

<!--      <v-col class="h-100">-->
<!--        <v-img src="/images/hero-img-h1.jfif" class="grid-item" aspect-ratio="1" cover/>-->
<!--      </v-col>-->
<!--    </v-row>-->
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
  border-radius: 24px;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  text-align: center;
  align-items: center;

  @media only screen and (width > 500px) {
    padding: 50px 60px;
  }
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

.hero-content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media only screen and (700px < width < 960px) {
    padding-inline: 95px;
  }

  @media only screen and (width > 700px) {
    padding-inline: 60px;
  }
}

.hero-title {
  color: white;
  font-size: 43px;
  font-weight: 100;
  line-height: 53px;
  font-family: Playfair Display, serif;
}

.hero-description {
  color: white;
  font-size: 20px;
  font-family: Rubik, "sans-serif";
}

.hero-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 20px;
}

.hero-action-buttons {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media only screen and (width > 700px) {
    flex-direction: row;
    justify-content: center;
    column-gap: 30px;
  }
}

.hero-button {
  text-transform: none;
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-family: Rubik, "sans-serif";

  &--flat {
    @extend .hero-button;
    color: white;
  }
}

.hero-image {
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  width: 100%;

  @media only screen and (width > 700px) {
    max-width: 460px;
  }
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


</style>
