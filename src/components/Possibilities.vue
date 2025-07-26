<script setup lang="ts">
  import type { PossibilityItem } from "@/interfaces/PossibilityItem.ts"

  const possibilities: PossibilityItem[] = [
    {
      id: 1,
      icon: "mdi-brain",
      text: "Trening funkcji poznawczych",
    },
    {
      id: 2,
      icon: "mdi-dumbbell",
      text: "Trening siłowy",
    },
    {
      id: 3,
      icon: "mdi-food-apple",
      text: "Odpowiednia dieta",
    },
    {
      id: 4,
      icon: "mdi-emoticon",
      text: "Pozytywne nastawienie",
    },
    {
      id: 5,
      icon: "mdi-pill",
      text: "Wczesna reakcja farmakologiczna",
    },
  ]
</script>

<template>
  <div class="possibilities-container">
    <p class="title">Co możemy zrobić</p>

    <ul class="possibilities-list">
      <li
        v-for="possibility in possibilities"
        :key="possibility.id"
        class="possibilities-list-item"
      >
        <v-icon :icon="possibility.icon"/>
        {{ possibility.text }}

      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.possibilities-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;
  gap: 30px;
  border-radius: 12px;
  background-color: rgb(var(--v-theme-primaryLight));
}

.title {
  color: rgb(var(--v-theme-primaryContrast));
  font-size: 32px;
  text-align: center;

  @media only screen and (width >= 960px) {
    font-size: 43px;
  }
}

.possibilities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  place-content: flex-start center;
}

.possibilities-list-item {
  color: rgb(var(--v-theme-primaryContrast));
  font-size: 16px;
  text-align: center;

  @media only screen and (width >= 960px) {
    font-size: 20px;
    margin-left: 20px;
  }
}
</style>
