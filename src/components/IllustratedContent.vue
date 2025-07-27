<script setup lang="ts">
  import { useDisplay } from "vuetify/framework"

  type Side = "ltr" | "rtl"

  interface Props {
    imagePath: string;
    side: Side;
  }

  defineProps<Props>()

  const { smAndDown } = useDisplay()
</script>

<template>
  <v-row class="content-container">
    <v-col
      :style="{order: side === 'ltr' || smAndDown ? 0 : 1 }"
      cols="11"
      sm="9"
      md="6"
      class="image-column"
    >
      <div
        :class="smAndDown ? 'w-100' : 'w-75'"
        class="img-wrapper"
      >
        <v-img
          class="image"
          :src="imagePath"
          cover
          :aspect-ratio="smAndDown ? 1 : 'initial'"
          position="top"
        />
      </div>
    </v-col>

    <v-col class="description-column">
      <slot name="description-content"/>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (width >= 960px) {
    flex-direction: row;
  }
}

.image-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.description-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 960px){
    row-gap: 15px;
  }

  @media only screen and (width >= 1280px){
    padding-top: var(--v-gap-elements-outside--sm);
  }
}

.image {
  border-radius: 24px;
}

.img-wrapper {
  position: relative;
  display: inline-block;
}

.img-wrapper::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  background-color: rgb(var(--v-theme-primaryLight));
  border-radius: 24px;
  z-index: 0;
}

</style>
