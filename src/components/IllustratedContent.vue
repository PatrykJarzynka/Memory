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
  <v-row class="justify-center">
    <v-col
      :style="{order: side === 'ltr' || smAndDown ? 0 : 1 }"
      cols="12"
      sm="10"
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

.image-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description-column {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: center;
  padding-top: 30px;

  @media only screen and (width >= 960px){
    row-gap: 15px;
  }

  @media only screen and (width >= 1280px){
    padding-top: initial;
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
