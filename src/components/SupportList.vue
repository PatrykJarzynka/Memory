<script setup lang="ts">
  import { useI18n } from "vue-i18n"
  import { useDisplay } from "vuetify/framework"
  import useScroll from "@/composables/useScroll.ts"

  interface SupportItem {
    id: number;
    name: string;
    description: string;
    icon: string;
    action: (() => void) | null;
  }

  const { smAndDown, lgAndUp } = useDisplay()
  const { t } = useI18n()
  const { scrollToElementById } = useScroll()

  const supportItems = computed<SupportItem[]>(() => [
    {
      id: 1,
      name: t("support.item1Title"),
      description: t("support.item1Desc"),
      icon: "mdi-hand-coin",
      action: () => scrollToElementById("goal"),
    },
    {
      id: 2,
      name: t("support.item2Title"),
      description: t("support.item2Desc"),
      icon: "mdi-phone-incoming-outgoing",
      action: null,
    },
    {
      id: 3,
      name: t("support.item3Title"),
      description: t("support.item3Desc"),
      icon: "mdi-translate-variant",
      action: null,
    },
    {
      id: 4,
      name: t("support.item4Title"),
      description: t("support.item4Desc"),
      icon: "mdi-account-tie",
      action: null,
    },
    {
      id: 5,
      name: t("support.item5Title"),
      description: t("support.item5Desc"),
      icon: "mdi-account-school",
      action: null,
    },
    {
      id: 6,
      name: t("support.item6Title"),
      description: t("support.item6Desc"),
      icon: "mdi-plane-car",
      action: null,
    },
  ])

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
      <v-list-item class="py-0 reveal-slide-up">
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
            {{ t('general.supportButton') }}
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
  padding:0;
  row-gap: var(--v-gap-elements-inside--xs);
  overflow: hidden;

  @media only screen and (width >= 960px) {
    column-gap: 30px;
  }
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
  color: rgb(var(--v-theme-background));
  background-color: rgb(var(--v-theme-primaryLight));
}

.support-item-title-text {
  font-size: 19px;
  color: rgb(var(--v-theme-primary));
  word-break: normal;
  white-space: normal;

  @media only screen and (width >= 960px) {
    font-size: 17px;
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
