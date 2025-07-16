<script setup lang="ts">
  import { useDisplay } from "vuetify/framework"

  const { smAndDown } = useDisplay()

  interface MediaData {
    link: string;
    platformName: string;
  }

  interface MediaItem {
    id: number;
    name: string;
    icon: string;
    mediaData: MediaData;
  }

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      name: "Pytanie na śniadanie",
      icon: "mdi-television",
      mediaData: {
        link: "123",
        platformName: "TVP2",
      },
    },
    {
      id: 2,
      name: "Reporterzy",
      icon: "mdi-television",
      mediaData: {
        link: "123",
        platformName: "TVP",
      },
    },
  ]
</script>

<template>
  <div class="media-container">
    <div
      v-for="item in mediaItems"
      :key="item.id"
      class="grid-row"
    >
      <div class="media-name-container">
        <v-icon
          :icon="item.icon"
          class="media-icon"
        />
        <p class="media-name">{{ item.name.toUpperCase() }}</p>
      </div>

      <v-btn
        :size="smAndDown ? undefined : 'large'"
        class="media-button"
      >
        <div class="d-flex ga-2">
          <span>{{ item.mediaData.platformName }}</span>
          <v-icon icon="mdi-open-in-new"/>
        </div>
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">

.media-container{
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 50px;
  row-gap: 30px;
  margin-inline: auto;
  align-items: center;
  border-inline: 2px solid rgb(var(--v-theme-primary));
  padding: 30px 20px;

  @media only screen and (width >= 600px) {
    padding: 60px;
  }

  @media only screen and (width >= 960px) {
    padding: 60px 80px;
  }

  @media only screen and (width >= 1280px) {
    padding: 60px 150px;
  }
}

.grid-row {
  display: contents;
}

.media-name-container {
  display: flex;
  align-items: center;
  column-gap: 15px;
}

.media-icon {
  font-size: 25px;

  @media only screen and (width >= 600px) {
    font-size: 35px;
  }
}

.media-name {
  font-size: 17px;
  font-weight: 400;
  color: rgba(var(--v-theme-primary));

  @media only screen and (width >= 600px) {
    font-size: 25px;
  }

  @media only screen and (width >= 960px) {
    font-size: 35px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 60px;
  }
}

.media-button {
  background-color: rgb(var(--v-theme-primary));
  color: white;
  font-size: 13px;
  width: 100%;

  @media only screen and (width >= 960px) {
    font-size: 16px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 20px;
  }
}
</style>
