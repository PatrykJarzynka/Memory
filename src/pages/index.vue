<template>
  <v-container class="main-container">
    <Hero/>

    <div class="d-flex flex-column align-center">
      <h2 class="section-title">HISTORIA CHOROBY W NASZEJ RODZINIE</h2>

      <div class="d-flex flex-column align-center ga-10">
        <FamilyMembers/>

        <h3 class="section-sub_title">Choroba Alzheimera o wczesnym początku od lat niszczy naszą rodzinę:</h3>

        <FamilyTimeline/>
      </div>
    </div>
  </v-container>

</template>

<script lang="ts" setup>

  import FamilyTimeline from "@/components/FamilyTimeline.vue"
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  row-gap: 150px;

  @media only screen and (width > 1280px) {
    max-width: 1500px;
  }
}

.section-title {
  color: rgb(var(--v-theme-primary));
  font-size: 40px;
  text-align: center;
}

.section-sub_title {
  color: rgb(var(--v-theme-primary));
  font-size: 25px;
  text-align: center;
}
</style>
