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

  const drawer = ref(false)

</script>

<template>
  <header>
    <v-row
      v-if="xs"
      no-gutters
    >
      <v-col class="d-flex align-center">
        <v-icon size="40" icon="mdi-brain"/>
      </v-col>

      <v-col class="justify-end d-flex">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"/>
      </v-col>
    </v-row>

    <v-row
      v-else
      no-gutters
    >
      <v-col
        cols="5"
      >
        <v-row
          no-gutters
          class="align-center h-100 justify-space-around"
        >
          <v-col
            v-for="item in headerItems.slice(0,3)"
            :key="item.title"
            cols="auto"
          >
            <span class="header-item">{{ item.title }}</span>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="d-flex justify-center">
        <v-icon class="brand-icon" icon="mdi-brain"/>
      </v-col>

      <v-col cols="5">
        <v-row
          no-gutters
          class="align-center h-100 justify-space-around"
        >
          <v-col
            v-for="item in headerItems.slice(3,6)"
            :key="item.title"
            cols="auto"
          >
            <span class="header-item">{{ item.title }}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

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
  </header>
</template>

<style scoped lang="scss">

.brand-icon {
  font-size: 65px;

  @media only screen and (max-width: 960px) {
    font-size: 60px;
  }
}

.header-item {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
  font-size: 1.1rem;

  @media only screen and (max-width: 960px) {
    font-size: 1rem;
  }
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
  color: white;
}

</style>
