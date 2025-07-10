<template>
  <v-container class="main-container">
    <Hero/>

    <div class="d-flex flex-column align-center ga-3">
      <h2 class="section-title">Historia choroby w naszej rodzinie</h2>
      <h3 class="section-sub_title">Choroba Alzheimera o wczesnym początku od lat niszczy naszą rodzinę:</h3>

      <div class="d-flex flex-column align-center ga-13">
        <FamilyMembers/>

        <FamilyTimeline/>
      </div>
    </div>

    <IllustratedContent
      image-path="/images/Alzheimer-desc-image.jfif"
      side="ltr"
    >
      <template #description-content>
        <h2 class="description-section-title">Alzheimer o wczesnym początku</h2>

        <p class="description-text">Choroba Alzheimera o wczesnym początku może być dziedziczona w rodzinie, jeśli występuje
          mutacja w genie PSEN1. Wystarczy ją odziedziczyć po jednym z rodziców, by choroba się rozwinęła.
          Mutacje w genach powodują nadmiar szkodliwego białka – amyloidu beta.
          Gromadzi się ono w mózgu i prowadzi do obumierania komórek nerwowych.
          Alzheimer to choroba mózgu, która stopniowo odbiera pamięć, zdolność myślenia i codziennego
          funkcjonowania. Z czasem mogą pojawić się też zmiany osobowości, lęk, wycofanie i problemy z
          mową. W późniejszych etapach chorzy potrzebują stałej opieki.</p>
      </template>
    </IllustratedContent>

  </v-container>

</template>

<script lang="ts" setup>

  import FamilyTimeline from "@/components/FamilyTimeline.vue"
  import IllustratedContent from "@/components/IllustratedContent.vue"
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  row-gap: 100px;

  @media only screen and (width > 1280px) {
    max-width: 1500px;
  }

  @media only screen and (width < 960px) {
    padding-inline: 50px;
  }

  @media only screen and (width < 600px) {
    padding-inline: 10px;
  }
}

.section-title {
  color: rgb(var(--v-theme-primary));
  font-size: 38px;
  text-align: center;

}

.description-section-title {
  @extend .section-title;

  @media only screen and (width < 1280px) {
    font-size: 26px;
  }

  @media only screen and (width < 960px) {
    font-size: 23px;
  }
}

.section-sub_title {
  color: rgb(var(--v-theme-primary));
  font-size: 25px;
  text-align: center;
  margin-block: 40px;
}

.description-text {
  color: rgb(var(--v-theme-primary));
  font-size: 25px;
  text-align: center;

  @media only screen and (width < 1280px) {
    font-size: 15px;
  }

  @media only screen and (width > 960px) {
    text-align: justify;
  }

}

</style>
