<script setup lang="ts">
  import { useDisplay } from "vuetify/framework"

  interface SupportItem {
    id: number;
    name: string;
    description: string;
    icon: string;
    action: (() => void) | null;
  }

  const { smAndDown, lgAndUp } = useDisplay()

  const supportItems: SupportItem[] = [
    {
      id: 1,
      name: "Wsparcie pieniężne",
      description: " Pieniądze zbierane na serwisie zrzutka do momentu prawnych uregulowań fundacji",
      icon: "mdi-hand-coin",
      action: () => {
        return
      },
    },
    {
      id: 2,
      name: "Kontakty z DIAN WashU Medicine",
      description: "Szukamy pomocy w nawiązaniu kontaktu z amerykańskim zespołem badawczym DIAN, który prowadzi przełomowe terapie dla osób z dziedziczną postacią Alzheimera. Każde połączenie może być dla nas szansą.",
      icon: "mdi-phone-incoming-outgoing",
      action: null,
    },
    {
      id: 3,
      name: "Tłumaczy",
      description: "Potrzebujemy wsparcia w tłumaczeniach dokumentów medycznych i rozmowach z anglojęzycznymi lekarzami.",
      icon: "mdi-translate-variant",
      action: null,
    },
    {
      id: 4,
      name: "Prawników",
      description: "Szukamy pomocy prawnej w sprawach związanych z leczeniem za granicą: dokumenty, zgody, logistyka.",
      icon: "mdi-account-tie",
      action: null,
    },
    {
      id: 5,
      name: "Edukacja języka angielskiego",
      description: "Chcemy uczyć się angielskiego, by lepiej rozumieć leczenie i komunikować się samodzielnie. To dla nas krok do niezależności i odwagi w działaniu.",
      icon: "mdi-account-school",
      action: null,
    },
    {
      id: 6,
      name: "Wsparcie w logistyce - mieszkanie, transport",
      description: "Leczenie i badania odbywają się za granicą — potrzebujemy pomocy w znalezieniu miejsca do życia, organizacji podróży i codziennej logistyce. To wsparcie pozwoli nam skupić się na walce z chorobą.",
      icon: "mdi-plane-car",
      action: null,
    },
  ]

  const numberOfColumns = computed(() => smAndDown.value ? 1 : 2)
</script>

<template>
  <v-list
    class="support-list"
    lines="three"
  >
    <div
      v-for="item in supportItems"
      :key="item.id"
    >
      <v-list-item>
        <v-list-item-title class="support-item-title-container">
          <div class="support-item-title-label">
            <v-icon
              :icon="item.icon"
              class="support-item-icon"
            />

            <p class="support-item-title-text">{{ item.name }}</p>
          </div>

          <v-btn
            v-if="item.action"
            :size="lgAndUp ? undefined : 'small'"
            class="support-item-button"
            @click="item.action()"
          >
            Wspomóż
          </v-btn>
        </v-list-item-title>

        <v-divider class="separator"/>

        <v-list-item-subtitle class="support-item-subtitle">
          {{ item.description }}
        </v-list-item-subtitle>
      </v-list-item>

    </div>
  </v-list>
</template>

<style scoped lang="scss">
.support-list {
  display: grid;
  grid-template-columns: repeat(v-bind(numberOfColumns), 1fr);
  background-color: transparent;
  column-gap: 130px;
}

.support-item-title-container {
  display: flex;
  justify-content: space-between;
}

.support-item-title-label {
  display: flex;
  column-gap: 10px;
  align-items: center;

  @media only screen and (width >= 600px) {
    align-items: flex-start;
  }
}

.support-item-button {
  color: white;
  background-color: rgb(var(--v-theme-primaryLight));
}

.support-item-title-text {
  font-size: 19px;
  color: rgb(var(--v-theme-primary));
  word-break: normal;
  white-space: normal;

  @media only screen and (width >= 960px) {
    font-size: 20px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 25px;
  }
}

.support-item-icon {
  font-size: 30px;
  color: rgb(var(--v-theme-primary));
}

.support-item-subtitle {
  font-size: 15px;
  line-height: 1.05rem;
  color: rgb(var(--v-theme-primary));
  display: block;

  @media only screen and (width >= 1280px) {
    font-size: 18px;
    line-height: 1.2rem;
  }
}

.separator {
  margin-block: 10px;
}
</style>
