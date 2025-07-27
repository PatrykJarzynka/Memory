<template>
  <v-container class="main-container family-section">
    <div class="start-container">
      <Hero/>

      <GoalTracker/>
    </div>

    <IconDivider/>

    <div class="d-flex flex-column align-center">
      <h2 class="section-title">Historia choroby w naszej rodzinie</h2>
      <FamilyIllustrated/>

    </div>
  </v-container>

  <div class="family-history-container">
    <v-container class="main-container family-inside-container">
      <h3 class="section-sub_title">
        Choroba Alzheimera o wczesnym początku od lat niszczy naszą rodzinę:
      </h3>

      <div class="family-history-content">
        <v-img
          class="family-tree-image"
          src="/images/Family-structure.png"
        />

        <FamilyTimeline/>
      </div>

    </v-container>

  </div>

  <v-container class="main-container py-0">

    <IconDivider/>

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

    <IconDivider/>

    <v-row no-gutters class="justify-center">
      <v-col cols="12" md="6" :class="['d-flex align-center', smAndDown ? 'justify-center' : '']">
        <h2 class="section-title--left">Rokowania</h2>
      </v-col>

      <v-col cols="10" md="6" class="d-flex align-center">
        <h3 :class="['section-sub_title--primary ', smAndDown ? 'text-center' : 'text-left']">Posiadając gen PSEN1 mamy pewność wystąpienia choroby Alzheimera.</h3>
      </v-col>
    </v-row>

    <Possibilities/>

    <IconDivider/>

    <h2 class="section-title">Dostępne leki</h2>
  </v-container>

  <Treatment/>

  <v-container class="main-container lower-container pt-0">
    <IconDivider/>

    <h2 class="section-title">Gdzie o nas mówiono</h2>

    <MediaList/>

    <IconDivider/>

    <h2 class="section-title">Czego obecnie nam trzeba</h2>

    <SupportList/>

    <IconDivider/>

    <h2 class="section-title">Nasi przyjaciele</h2>

    <Friends/>

  </v-container>

  <Footer/>

</template>

<script lang="ts" setup>

  import { useDisplay } from "vuetify/framework"
  import Friends from "@/components/Friends.vue"
  import FamilyIllustrated from "@/components/FamilyIllustrated.vue"
  import GoalTracker from "@/components/GoalTracker.vue"
  import IconDivider from "@/components/IconDivider.vue"
  import IllustratedContent from "@/components/IllustratedContent.vue"
  import MediaList from "@/components/MediaList.vue"
  import Possibilities from "@/components/Possibilities.vue"
  import SupportList from "@/components/SupportList.vue"
  import Treatment from "@/components/Treatment.vue"

  const { smAndDown } = useDisplay()

</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  padding-inline: 10px;

  @media only screen and (width >= 600px) {
    padding-inline: 40px;
  }

  @media only screen and (width >= 1280px) {
    max-width: 1500px;
  }
}

.family-section {

  padding-bottom: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 1280px) {
    align-items: center;
    padding-bottom: var(--v-gap-elements-outside--sm);
  }
}

.start-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: var(--v-space-section--xs);
  align-items: center;

  @media only screen and (width >= 600px) {
    row-gap: var(--v-space-section--sm);
  }
}

.section-title {
  color: rgb(var(--v-theme-primary));
  font-size: 40px;
  line-height: 1;
  margin-top: -5px; // This is done due to the height of the font, to match spaces between sections
  text-align: center;
  padding-bottom: var(--v-gap-elements-outside--xs);
  font-weight: 500;
  font-family: var(--v-title-font);

  @media only screen and (width >= 600px) {
    font-size: 35px;
  }

  @media only screen and (width >= 960px) {
    font-size: 40px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 67px;
    padding-bottom: var(--v-gap-elements-outside--sm);
  }

  &--left {
    @extend .section-title;
    text-align: left;
    padding-bottom: var(--v-gap-elements-outside--xs);

    @media only screen and (width >= 1280px) {
      padding-bottom: var(--v-gap-elements-outside--sm);
    }
  }
}

.description-section-title {
  @extend .section-title;
  font-size: 30px;
  margin: 0;

  @media only screen and (width >= 600px) {
    font-size: 35px;
  }

  @media only screen and (width >= 960px) {
    font-size: 28px;
  }

  @media only screen and (width >= 1280px) {
    padding-bottom: 20px;
    font-size: 45px;
  }
}

.section-sub_title {
  color: rgb(var(--v-theme-primaryContrast));
  font-size:18px;
  text-align: center;
  padding-bottom: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 600px) {
    font-size: 21px;
  }

  @media only screen and (width >= 960px) {
    font-size: 23px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 25px;
    padding-bottom: var(--v-gap-elements-outside--sm);
  }

  &--primary {
    @extend .section-sub_title;
    color: rgb(var(--v-theme-primaryLight));
  }
}

.description-text {
  color: rgb(var(--v-theme-primary));
  font-size: 17px;
  text-align: justify;

  @media only screen and (width >= 600px) {
    font-size: 20px;
  }

  @media only screen and (width >= 960px) {
    font-size: 18px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 25px;
  }
}

.family-history-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(var(--v-theme-primary));
}

.family-inside-container {
  padding-block: var(--v-gap-elements-outside--xs);

  @media only screen and (width >= 1280px) {
    padding-block: var(--v-gap-elements-outside--sm);
  }
}

.family-history-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--v-gap-elements-inside--xs);
}

.family-tree-image {
  border: 3px solid black;
  border-radius: 12px;
  width: 100%;

  @media only screen and (width >= 1280px) {
    width: 60%;
  }
}

.lower-container {
  padding-bottom: var(--v-space-section--xs);
}

</style>
