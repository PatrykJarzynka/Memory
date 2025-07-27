<script setup lang="ts">

</script>

<template>
  <div class="family-container-2">
    <v-row
      no-gutters
      class="family-container"
    >
      <v-col
        cols="12"
        sm="9"
        md="6"
        class="d-flex justify-center reveal"
      >
        <div class="images-container">
          <v-img cover class="family-image big-image" src="/images/kacper2.JPG"/>
          <v-img aspect-ratio="1" cover class="family-image" src="/images/kacper2.JPG"/>
          <v-img aspect-ratio="1" cover class="family-image" src="/images/kacper2.JPG"/>
        </div>
      </v-col>

      <v-col
        class="d-flex justify-center reveal-slide-right"
        cols="12"
        md="6"
      >
        <FamilyMembersList/>
      </v-col>
    </v-row>
  </div>

</template>

<style scoped lang="scss">

.family-container {
  justify-content: center;
  row-gap: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 1280px) {
    row-gap: var(--v-gap-elements-outside--sm);
  }
}

.family-container-2 {
  width: 100%;
}

.images-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  gap: 20px;

  @media only screen and (width >= 1280px) {
    padding: 40px;
  }
}

.family-image {
  border-radius: 24px;
}

.big-image {
  grid-row: span 2;
}

</style>
