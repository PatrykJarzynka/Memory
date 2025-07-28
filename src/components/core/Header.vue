<script setup lang="ts">

  import type { Language } from "@/interfaces/Language.ts"
  import { useI18n } from "vue-i18n"
  import { useDisplay } from "vuetify/framework"
  import { LanguageType } from "@/enums/LanguageType.ts"

  const { xs, smAndDown } = useDisplay()
  const router = useRouter()
  const currentRoute = useRoute()
  const { locale, t } = useI18n()

  interface HeaderItem {
    title: string;
    action: () => void;
  }

  const headerItems: HeaderItem[] = [
    {
      title: t("header.item1"),
      action: () => {
        return
      },
    },
    {
      title: t("header.item2"),
      action: () => {
        return
      },
    },
    {
      title: t("header.item3"),
      action: () => {
        return
      },
    },
    {
      title: t("header.item4"),
      action: () => {
        return
      },
    },
    {
      title: t("header.item5"),
      action: () => {
        return
      },
    },
    {
      title: t("header.item6"),
      action: () => {
        return
      },
    },
    {
      title: t("header.item7"),
      action: () => {
        return
      },
    },
    {
      title: t("header.item8"),
      action: () => {
        return
      },
    },
  ]

  const supportedLanguages: Language[] = [
    {
      type: LanguageType.PL,
      flagSvg: "/src/assets/polish-flag.svg",
      locale: "pl",
    },
    {
      type: LanguageType.EN,
      flagSvg: "/src/assets/english-flag.svg",
      locale: "en",
    },
  ]

  const selectedLanguage = computed(() => supportedLanguages.find(language => language.locale === locale.value))
  const drawer = ref(false)

  watch(() => currentRoute.path, newPath => {
    locale.value = newPath.startsWith("/en") ? "en" : "pl"
  }, { immediate: true })

  function onLanguageClick (languageType: LanguageType): void {
    const newLanguage = supportedLanguages.find(lang => lang.type === languageType)

    if (newLanguage === selectedLanguage.value) {
      return
    }

    if (newLanguage?.type === LanguageType.PL) {
      router.push("/")
    } else {
      router.push(`/${newLanguage?.locale}`)
    }
  }

</script>

<template>
  <v-app-bar
    color="transparent"
    flat
    class="header px-5"
  >
    <v-container class="header-container">
      <v-row
        v-if="smAndDown"
        no-gutters
      >
        <v-col class="justify-start d-flex">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"/>
        </v-col>
      </v-row>

      <v-row
        v-else
        no-gutters
        class="justify-space-around"
      >
        <v-col
          v-for="item in headerItems"
          :key="item.title"
          cols="auto"
          class="h-100 d-flex align-center"
        >
          <v-btn
            :text="item.title"
            variant="plain"
            class="header-item h-100 py-3"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-menu>
      <template #activator="{props}">
        <v-btn
          v-bind="props"
          class="language-button"
        >
          <v-img
            class="w-100"
            :src="selectedLanguage.flagSvg"
          />

          <v-icon icon="mdi-menu-down"/>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="language in supportedLanguages"
          :key="language.type"
          class="pa-0"
        >
          <v-btn
            class="language-button"
            @click="onLanguageClick(language.type)"
          >
            <v-img
              class="w-100"
              :src="language.flagSvg"
            />
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    disable-resize-watcher
    :location="xs ? 'left' : undefined"
    class="drawer-container"
  >
    <template #prepend>
      <v-container class="d-flex align-center drawer-prepend">
        <v-icon size="35" icon="mdi-bookmark"/>

        <v-list-item
          class="drawer-title-item"
          lines="one"
        >
          <span class="drawer-title-item--text">{{ 'Sekcje' }}</span>
        </v-list-item>
      </v-container>
    </template>

    <v-divider/>

    <v-container>
      <v-list>
        <v-list-item
          v-for="item in headerItems"
          :key="item.title"
          :title="item.title"
          :value="item.title"
          class="drawer-item"
        >

          <template #append>
            <v-icon size="22" icon="mdi-arrow-right-circle-outline"/>
          </template>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">

.header {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(var(--v-theme-background)) !important;
  border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));

  @media only screen and (width >= 960px) {
    border-bottom: none;
  }

  :deep(.v-toolbar__content) {
    overflow: initial;
  }
}

.header-container {
  display: flex;
  align-items: center;
  height: 100%;

  @media only screen and (width >= 960px) {
    border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  @media only screen and (min-width: 1920px) {
    max-width: 1500px;
  }
}

.brand-icon {
  font-size: 65px;

  @media only screen and (max-width: 960px) {
    font-size: 60px;
  }
}

.header-item {
  background-color: transparent;
  opacity: 1;
  color: rgb(var(--v-theme-primary));
  padding: 0 5px;
}

.header-item:hover {
  transform: translateY(-10%);
}

.drawer-container {
  background-color: rgb(var(--v-theme-background));
  top: 0 !important;
  height: 100% !important;
  z-index: 1007 !important;
}

.drawer-title-item {
  padding-left: 5px;

  &--text {
    font-size: 1.1rem;
  }
}

.drawer-item {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
}

.drawer-prepend {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-primaryContrast));
  height: 64px;
}

.language-selector {
  display: flex;
  align-items: center;
  width: 60px;
}

.language-button {
  display: flex;
  :deep(.v-btn__content) {
    width: 100%;
  }
}

</style>
