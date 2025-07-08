<script setup lang="ts">
  import { useDisplay } from "vuetify/framework"

  const { xl, lg } = useDisplay()

  const buttonSize = computed((): string | undefined => {
    if (xl.value) {
      return "large"
    } else if (lg.value) {
      return undefined
    } else {
      return "small"
    }
  })

</script>

<template>
  <div class="hero-container">
    <v-row
      no-gutters
      class="hero-content"
    >
      <v-col cols="12" sm="9" md="5" class="hero-lead-column">
        <div class="lead-column-text">
          <h1 class="hero-title">Zanim dogoni nas czas - działamy</h1>

          <p class="hero-description">W naszej rodzinie Alzheimer zaczyna się w wieku 30–40 lat. Wiemy, że nie mamy czasu – ale mamy nadzieję.</p>
        </div>

        <div class="hero-action-buttons">
          <v-btn
            :size="buttonSize"
            class="hero-button"
          >
            Wesprzyj
          </v-btn>

          <v-btn
            variant="text"
            :size="buttonSize"
            class="hero-button--flat"
          >
            Poznaj historie

            <template #append>
              <v-icon icon="mdi-arrow-right-thin"/>
            </template>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" sm="9" md="5">
        <v-img src="/images/hero-img-h1.jfif" class="hero-image" cover/>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">

.hero-container {
  background-color: rgb(var(--v-theme-primary));
  width: 100%;
  border-radius: 24px;
  padding: 50px 20px;
}

.hero-content {
  align-items: center;
  justify-content: space-evenly;
  row-gap: 40px;

  @media only screen and (width < 960px) {
    flex-direction: column-reverse;
  }
}

.hero-lead-column {
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 60px;
  padding-inline: 60px;

  @media only screen and (width < 1280px) {
    row-gap: 30px;
  }

  @media only screen and (width < 960px) {
    text-align: center;
  }
}

.lead-column-text {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.hero-title {
  color: white;
  font-size: 67px;
  font-weight: 100;
  line-height: 1.2em;
  font-family: Playfair Display, serif;

  @media only screen and (width < 1920px) {
    font-size: 53px;
  }

  @media only screen and (width < 1280px) {
    font-size: 40px;
  }

  @media only screen and (width < 600px) {
    font-size: 30px;
  }
}

.hero-description {
  color: white;
  font-size: 20px;
  font-family: Rubik, "sans-serif";

  @media only screen and (width < 1920px) {
    font-size: 18px;
  }

  @media only screen and (width < 1280px) {
    font-size: 16px;
  }

  @media only screen and (width < 600px) {
    font-size: 14px;
  }
}

.hero-action-buttons {
  display: flex;
  column-gap: 20px;
  row-gap: 10px;

  @media only screen and (width < 960px) {
    justify-content: center;
  }

  @media only screen and (width < 320px) {
    flex-direction: column;
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

  @media only screen and (width < 1280px) {
    font-size: 14px;
  }

  @media only screen and (width < 600px) {
    font-size: 12px;
  }
}

.hero-image {
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  width: 100%;
  aspect-ratio: 1/1;

  @media only screen and (width < 960px) {
    aspect-ratio: 1.7/1;
  }
}
</style>
