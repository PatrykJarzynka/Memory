<script setup lang="ts">
  import type { PossibilityItem } from "@/interfaces/PossibilityItem.ts"

  const possibilities: PossibilityItem[] = [
    {
      icon: "mdi-brain",
      text: "Trening funkcji poznawczych",
    },
    {
      icon: "mdi-dumbbell",
      text: "Trening siłowy",
    },
    {
      icon: "mdi-food-apple",
      text: "Odpowiednia dieta",
    },
    {
      icon: "mdi-emoticon",
      text: "Pozytywne nastawienie",
    },
    {
      icon: "mdi-pill",
      text: "Wczesna reakcja farmakologiczna",
    },
  ]
</script>

<template>
  <div class="w-100 d-flex flex-column align-center">
    <v-row class="possibilities-container">
      <v-col
        v-for="possibility in possibilities"
        :key="possibility.text"
        cols="12"
        sm="5"
        md="4"
      >
        <v-card
          elevation="2"
          class="possibility-card"
        >
          <v-avatar class="possibilities-icon-container">
            <v-icon
              :icon="possibility.icon"
              class="possibilities-icon"
            />
          </v-avatar>

          <v-card-title class="possibility-text">{{ possibility.text }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>


</template>

<style scoped lang="scss">
.possibilities-container {
  padding-block: 50px;
  justify-content: center;

  @media only screen and (width >= 1280px) {
    max-width: 70%;
  }
}

.possibility-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: 24px;
  height: 100%;
  padding: 20px;


  @media only screen and (width >= 600px) {
    aspect-ratio: 1;
    padding-top: 40px;
  }

  @media only screen and (width >= 768px) {
    aspect-ratio: 1;
    padding-top: 50px;
  }
}

.possibility-card:hover {
  background-color: rgb(var(--v-theme-primary));

  .possibilities-icon-container {
    color: white;
  }

  .possibility-text {
    color: white;
  }
}

.possibility-text {
  white-space: wrap;
  text-align: center;
  display: flex;
  align-items: center;
  flex:1;
  font-size: 17px;

  @media only screen and (width >= 600px) {
    font-size: 15px;
  }

  @media only screen and (width >= 768px) {
    font-size: 17px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 20px;
  }
}

.possibilities-icon-container {
  border: 3px solid rgb(var(--v-theme-primaryLight));
  border-radius: 50%;
  color: rgb(var(--v-theme-primary));
  width: 70px;
  height: 70px;

  @media only screen and (width >= 600px) {
    width: 60px;
    height: 60px;
  }

  @media only screen and (width >= 768px) {
    width: 70px;
    height: 70px;
  }

  @media only screen and (width >= 1280px) {
    width: 90px;
    height: 90px;
  }
}

.possibilities-icon {
  font-size: 45px;

  @media only screen and (width >= 600px) {
    font-size: 45px;
  }

  @media only screen and (width >= 768px) {
    font-size: 50px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 60px;
  }
}
</style>
