<script setup lang="ts">
  import { useI18n } from "vue-i18n"
  import AppButton from "@/components/core/AppButton.vue"
  import useRedirect from "@/composables/useRedirect.ts"
  import useScroll from "@/composables/useScroll.ts"
  import { CHARITY_URL } from "@/utils/constants.ts"

  const { t } = useI18n()
  const { scrollToElementById } = useScroll()
  const { redirect } = useRedirect()
</script>

<template>
  <div class="hero-container">
    <v-row
      no-gutters
      class="hero-content"
    >
      <v-col
        cols="12"
        sm="9"
        md="6"
        class="hero-lead-column reveal-slide-up"
      >
        <div class="lead-column-text">
          <h1 class="hero-title">{{ t('hero.title') }}</h1>

          <p class="hero-description">{{ t('hero.description') }}</p>
        </div>

        <div class="hero-action-buttons">
          <AppButton
            type="normal"
            :text="t('general.supportButton')"
            @click="redirect(CHARITY_URL, true)"
          />

          <AppButton
            type="flat"
            :text="t('hero.exploreButton')"
            icon="mdi-arrow-right-thin"
            @click="scrollToElementById('history')"
          />
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="9"
        md="5"
        class="reveal"
      >
        <v-img src="/images/hero-img.jfif" class="hero-image" cover/>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">

.hero-container {
  background-color: rgb(var(--v-theme-primary));
  width: 100%;
  border-radius: 24px;
  padding: var(--v-space-section--xs) 30px;
}

.hero-content {
  align-items: center;
  justify-content: space-evenly;
  row-gap: 40px;
  flex-direction: column-reverse;

  @media only screen and (width >= 960px) {
    flex-direction: initial;
  }
}

.hero-lead-column {
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 30px;
  padding-inline: 60px;

  @media only screen and (width >= 960px) {
    text-align: left;
  }

  @media only screen and (width >= 1280px) {
    row-gap: 60px;
  }
}

.lead-column-text {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}

.hero-title {
  color: rgb(var(--v-theme-background));
  font-size: 30px;
  font-weight: 100;
  line-height: 1.2em;
  font-family: Playfair Display, serif;

  @media only screen and (width >= 600px) {
    font-size: 40px;
  }

  @media only screen and (width >= 960px) {
    font-size: 36px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 55px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 60px;
  }
}

.hero-description {
  color: rgb(var(--v-theme-background));;
  font-size: 14px;
  font-family: Rubik, "sans-serif";

  @media only screen and (width >= 600px) {
    font-size: 16px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 18px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 20px;
  }
}

.hero-action-buttons {
  display: flex;
  column-gap: 20px;
  row-gap: 10px;
  flex-direction: column;
  justify-content: center;

  @media only screen and (width >= 320px) {
    flex-direction: initial;
  }

  @media only screen and (width >= 960px) {
    justify-content: initial;
  }
}

.hero-image {
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  width: 100%;
  aspect-ratio: 1.7/1;

  @media only screen and (width >= 960px) {
    aspect-ratio: 1;
  }
}
</style>
