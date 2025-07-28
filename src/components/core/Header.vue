<script setup lang="ts">
  import { useI18n } from "vue-i18n"
  import { useDisplay } from "vuetify/framework"
  import LanguageSelector from "@/components/core/LanguageSelector.vue"

  const { xs, smAndDown } = useDisplay()
  const { t } = useI18n()

  interface HeaderItem {
    title: string;
    action: () => void;
  }

  const headerItems = computed<HeaderItem[]>(() => [
    {
      title: t("header.item1"),
      action: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      },
    },
    {
      title: t("header.item2"),
      action: () => {
        scrollTo("history")
      },
    },
    {
      title: t("header.item3"),
      action: () => {
        scrollTo("disease")
      },
    },
    {
      title: t("header.item4"),
      action: () => {
        scrollTo("treatment")
      },
    },
    {
      title: t("header.item5"),
      action: () => {
        scrollTo("media")
      },
    },
    {
      title: t("header.item6"),
      action: () => {
        scrollTo("support")
      },
    },
    {
      title: t("header.item7"),
      action: () => {
        scrollTo("friends")
      },
    },
    {
      title: t("header.item8"),
      action: () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        })
      },
    },
  ])

  const drawer = ref(false)

  function scrollTo (sectionId: string): void {
    const element = document.querySelector(`#${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
            @click="item.action"
          />
        </v-col>
      </v-row>
    </v-container>

    <LanguageSelector/>
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
          @click="item.action"
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

</style>
