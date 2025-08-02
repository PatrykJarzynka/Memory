<script setup lang="ts">
  import { useI18n } from "vue-i18n"

  interface TreatmentItem {
    id: number;
    name: string;
    isExperimental: boolean;
  }

  const { t } = useI18n()

  const treatmentItems = computed<TreatmentItem[]>(() => [
    {
      id: 1,
      name: "Donanemab",
      isExperimental: false,
    },
    {
      id: 2,
      name: "Gantenerumab",
      isExperimental: true,
    },
    {
      id: 3,
      name: "Lecanamab",
      isExperimental: false,
    },
  ])
</script>

<template>
  <div class="treatment-container reveal-slide-up">
    <div class="treatment-list-container">
      <div
        v-for="(item, index) in treatmentItems"
        :key="item.id"
        class="treatment-item-container"
      >
        <div class="treatment-item">
          <p class="treatment-name">{{ item.name }}</p>

          <p
            v-if="item.isExperimental"
            class="experimental-drug-label"
          >
            ( {{ t('treatment.experimentalDrugTitle') }} )
          </p>
        </div>

        <div
          v-if="index !== treatmentItems.length - 1"
          class="separator"
        />
      </div>
    </div>

    <p class="treatment-link">
      {{ t('treatment.linkDesc') }}

      <a
        href="https://medicine.washu.edu/"
        target="_blank"
        class="medicine-link"
      >
        {{ ' www.medicine.washu.edu/' }}
      </a>
    </p>
  </div>
</template>

<style scoped lang="scss">
.treatment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--v-theme-primary));
  padding-block: var(--v-gap-elements-outside--xs);
  padding-inline: 10px;
  text-align: center;

  @media only screen and (width >= 1280px) {
    padding-block: var(--v-gap-elements-outside--sm);
  }
}

.treatment-list-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 960px) {
    flex-direction: row;
    align-items: stretch;
    padding-block: 60px;
  }

  @media only screen and (width >= 1280px) {
    padding-bottom: var(--v-gap-elements-outside--sm);
  }
}

.treatment-item-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media only screen and (width >= 960px) {
    flex-direction: row;
    width: initial;
  }
}

.treatment-item {
  position: relative;
  font-family: var(--v-secondary-font);
  color: rgb(var(--v-theme-background));
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 10px;

  @media only screen and (width >= 1280px) {
    padding-inline: 40px;
  }
}

.treatment-name {
  font-size: 27px;
  font-family: var(--v-primary-font);

  @media only screen and (width >= 600px) {
    font-size: 32px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 35px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 40px;
  }
}

.experimental-drug-label {
  @media only screen and (width >= 600px) {
    font-size: 18px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 20px;
  }

  @media only screen and (width >= 1920px) {
    font-size: 25px;
  }
}

.separator {
  width: 30%;
  height: 2px;
  background: rgb(var(--v-theme-background));
  margin-block: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 960px) {
    width: 1px;
    height: 100%;
  }

  @media only screen and (width >= 1280px) {
    margin-block: var(--v-gap-elements-outside--sm);
  }
}

.treatment-link {
  color: rgb(var(--v-theme-background));
}

.medicine-link {
  color: inherit;
  text-decoration: underline;
}

.medicine-link:hover {
  cursor: pointer;
}
</style>
