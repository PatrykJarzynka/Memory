<script setup lang="ts">

  import { useDisplay } from "vuetify/framework"

  const { xs } = useDisplay()

  interface HeaderItem {
    title: string;
    action: () => void;
  }

  const headerItems: HeaderItem[] = [
    {
      title: "Start",
      action: () => {
        return
      },
    },
    {
      title: "Historia",
      action: () => {
        return
      },
    },
    {
      title: "Choroba",
      action: () => {
        return
      },
    },
    {
      title: "Leczenie",
      action: () => {
        return
      },
    },
    {
      title: "Media",
      action: () => {
        return
      },
    },
    {
      title: "Pomoc",
      action: () => {
        return
      },
    },
    {
      title: "Kontakt",
      action: () => {
        return
      },
    },
  ]

  const drawer = ref(false);

</script>

<template>
  <v-app-bar
    color="transparent"
    flat
    class="header"
  >
    <v-container class="header-container">
      <v-row
        v-if="xs"
        no-gutters
      >
        <v-col class="justify-end d-flex">
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

  :deep(.v-toolbar__content) {
    overflow: initial;
  }

  @media only screen and (min-width: 1920px) {
    max-width: 1500px;
  }
}

.header-container {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
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
}

</style>
