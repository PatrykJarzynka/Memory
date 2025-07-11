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
  <v-row class="possibilities-container">
    <v-col
      v-for="possibility in possibilities"
      :key="possibility.text"
      cols="12"
      sm="4"
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
</template>

<style scoped lang="scss">
.possibilities-container {
  padding-block: 50px;
  justify-content: center;
}

.possibility-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding-block: 50px;
  border-radius: 24px;
  height: 100%;

  @media only screen and (width >= 600px) {
    padding-block: 30px;
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
  flex: 1;
  align-items: center;

  @media only screen and (width >= 600px) {
    font-size: 15px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 20px;
  }
}

.possibilities-icon-container {
  border: 3px solid rgb(var(--v-theme-highlight));
  border-radius: 50%;
  color: rgb(var(--v-theme-primary));
  width: 90px;
  height: 90px;

  @media only screen and (width >= 600px) {
    width: 60px;
    height: 60px;
  }

  @media only screen and (width >= 1280px) {
    width: 90px;
    height: 90px;
  }
}

.possibilities-icon {
  font-size: 60px;

  @media only screen and (width >= 600px) {
    font-size: 45px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 60px;
  }
}
</style>
