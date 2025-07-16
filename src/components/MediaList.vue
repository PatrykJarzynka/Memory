<script setup lang="ts">
  import { useDisplay } from "vuetify/framework"

  const { smAndDown } = useDisplay()
</script>

<template>
  <v-row no-gutters class="media-container">
    <div class="media-name-container">
      <v-icon
        icon="mdi-television"
        class="media-icon"
      />
      <p class="media-name">PYTANIE NA ŚNIADANIE</p>
    </div>

    <v-btn
      :size="smAndDown ? undefined : 'large'"
      class="media-button"
    >
      <div class="d-flex ga-2">
        <span>TVP2</span>
        <v-icon icon="mdi-open-in-new"/>
      </div>
    </v-btn>
    <div class="media-name-container">
      <v-icon
        class="media-icon"
        icon="mdi-television"
      />
      <p class="media-name">REPORTERZY</p>
    </div>

    <v-btn
      :size="smAndDown ? undefined : 'large'"
      class="media-button"
    >
      <div class="d-flex ga-2">
        <span>TVP</span>
        <v-icon icon="mdi-open-in-new"/>
      </div>
    </v-btn>
  </v-row>
</template>

<style scoped lang="scss">
.media-container {
  padding: 30px 20px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  column-gap: 50px;
  row-gap: 30px;
  align-items: center;
  border-inline: 2px solid rgb(var(--v-theme-primary));

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

  @media only screen and (width >= 960px) {
    font-size: 16px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 20px;
  }
}
</style>
