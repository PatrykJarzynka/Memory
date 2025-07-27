<script setup lang="ts">
  import type { PossibilityItem } from "@/interfaces/PossibilityItem.ts"
  import {useI18n} from "vue-i18n";

  const {t} = useI18n();


  const possibilities = computed<PossibilityItem[]>(() =>
    [
      {
        id: 1,
        icon: "mdi-brain",
        text: t('possibilities.option1'),
      },
      {
        id: 2,
        icon: "mdi-dumbbell",
        text: t('possibilities.option2'),
      },
      {
        id: 3,
        icon: "mdi-food-apple",
        text: t('possibilities.option3'),
      },
      {
        id: 4,
        icon: "mdi-emoticon",
        text: t('possibilities.option4'),
      },
      {
        id: 5,
        icon: "mdi-pill",
        text: t('possibilities.option5'),
      },
    ]
  )
</script>

<template>
  <div class="possibilities-container reveal-slide-up">
    <p class="title">{{ t('possibilities.options') }}</p>

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
  padding: var(--v-gap-elements-outside--xs) 50px;
  gap: 30px;
  border-radius: 12px;
  background-color: rgb(var(--v-theme-primaryLight));

  @media only screen and (width >= 1280px) {
    padding: var(--v-gap-elements-outside--sm) 50px;
  }
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
