<script setup lang="ts">
  import { useDisplay } from "vuetify/framework"
  import useRedirect from "@/composables/useRedirect.ts"

  const { smAndDown } = useDisplay()
  const { redirect } = useRedirect()

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
        link: "https://pytanienasniadanie.tvp.pl/86360094/alzheimer-w-mlodym-wieku",
        platformName: "TVP2",
      },
    },
    {
      id: 2,
      name: "Reporterzy",
      icon: "mdi-television",
      mediaData: {
        link: "https://www.tvp.info/87380625/alzheimer-atakuje-nawet-nastolatkow-w-tej-rodzinie-alzheimer-nie-czeka-na-starosc-reporterzy",
        platformName: "TVP",
      },
    },
  ]
</script>

<template>
  <div class="media-container reveal-slide-up">
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
        @click="redirect(item.mediaData.link, true)"
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
  padding: var(--v-gap-elements-outside--xs) 20px;

  @media only screen and (width >= 600px) {
    padding: var(--v-gap-elements-outside--sm);
  }

  @media only screen and (width >= 960px) {
    padding: var(--v-gap-elements-outside--sm) 80px;
  }

  @media only screen and (width >= 1280px) {
    padding: var(--v-gap-elements-outside--sm) 150px;
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
    font-size: 52px;
  }
}

.media-button {
  background-color: rgb(var(--v-theme-primaryLight));
  color: rgb(var(--v-theme-primaryContrast));
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
