<script setup lang="ts">
  import {useI18n} from "vue-i18n";

  interface TreatmentItem {
    id: number;
    name: string;
    priceDesc: string | null;
  }

  const {t} = useI18n();

  const treatmentItems = computed<TreatmentItem[]>(() => [
    {
      id: 1,
      name: "Donanemab",
      priceDesc: t('treatment.price1'),
    },
    {
      id: 2,
      name: "Gantenerumab",
      priceDesc: t('treatment.price2')
    },
    {
      id: 3,
      name: "Lecanamab",
      priceDesc: t('treatment.price3'),
    }
  ])

  function splitNumber (value: number): string {
    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }
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
            class="treatment-price"
          >
            {{ item.priceDesc }}
          </p>
        </div>

        <div
          v-if="index !== treatmentItems.length - 1"
          class="separator"
        />
      </div>
    </div>

    <p class="treatment-link">{{t('treatment.linkDesc')}}</p>
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
  font-family: var(--v-secondary-font);
  color: rgb(var(--v-theme-primaryContrast));
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: var(--v-gap-elements-inside--xs);
  padding-inline: 25px;

  @media only screen and (width >= 1280px) {
    padding-inline: 40px;
  }
}

.treatment-name {
  font-size: 23px;
  font-family: var(--v-primary-font);

  @media only screen and (width >= 600px) {
    font-size: 24px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 28px;
  }
}

.treatment-price {
  font-size: 24px;
  font-weight: 400;
  font-family: var(--v-secondary-font);

  @media only screen and (width >= 600px) {
    font-size: 25px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 30px;
  }
}

.separator {
  width: 30%;
  height: 2px;
  background: rgb(var(--v-theme-primaryContrast));
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
  color: rgb(var(--v-theme-primaryContrast));
}
</style>
