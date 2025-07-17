<template>
  <v-container class="main-container">
    <Hero/>

    <IconDivider/>

    <div class="d-flex flex-column align-center ga-3">
      <h2 class="section-title">Historia choroby w naszej rodzinie</h2>
      <h3 class="section-sub_title">Choroba Alzheimera o wczesnym początku od lat niszczy naszą rodzinę:</h3>

      <FamilyIllustrated/>
    </div>

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

    <v-row no-gutters class="pb-16 justify-center">
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <h2 class="section-title--left">Rokowania</h2>
      </v-col>

      <v-col cols="10" md="6" class="d-flex justify-center">
        <h3 class="section-sub_title--left  text-center">Posiadając gen PSEN1 mamy pewność wystąpienia choroby Alzheimera.</h3>
      </v-col>
    </v-row>

    <Possibilities/>

    <IconDivider/>

    <h2 class="section-title">Dostępne leki</h2>
  </v-container>

  <Treatment/>

  <v-container class="main-container">
    <IconDivider/>

    <h2 class="section-title">Gdzie o nas mówiono</h2>

    <MediaList/>

    <IconDivider/>

    <h2 class="section-title">Czego obecnie nam trzeba</h2>

    <SupportList/>

    <IconDivider/>

    <h2 class="section-title">Nasi przyjaciele</h2>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>Full name</v-card-title>
          <v-card-subtitle>Subtitle</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title>Full name</v-card-title>
          <v-card-subtitle>Subtitle</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script lang="ts" setup>

  import FamilyIllustrated from "@/components/FamilyIllustrated.vue"
  import IconDivider from "@/components/IconDivider.vue"
  import IllustratedContent from "@/components/IllustratedContent.vue"
  import MediaList from "@/components/MediaList.vue"
  import Possibilities from "@/components/Possibilities.vue"
  import SupportList from "@/components/SupportList.vue"
  import Treatment from "@/components/Treatment.vue"

  const friends = [
    {
      name: "Patryk Jarzynka",
      description: "Programista i przyjaciel, który z zaangażowaniem tworzy naszą stronę internetową, dbając o to, by była nie tylko funkcjonalna, ale i pełna serca.",
    },
    {
      name: "Aleksandra Bratek",
      description: "Przyjaciółka i lekarka w trakcie specjalizacji urologicznej. Z ogromnym zaangażowaniem wspiera w poszukiwaniu leczenia choroby.",
    },
    {
      name: "Aleksandra Dzierżawa",
      description: "Terapeutka, przyjaciółka. Ogromne wsparcie w naszych działaniach i organizacji.",
    },
    {
      name: "SuperHumans Jarosław Szlachta",
      description: "Twórca systemu walki S.A.R.24. Wspiera naszą inicjatywę na wielu poziomach.",
    },
  ]

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

.section-title {
  color: rgb(var(--v-theme-primary));
  font-size: 30px;
  text-align: center;
  padding-bottom: 40px;

  @media only screen and (width >= 600px) {
    font-size: 35px;
  }

  @media only screen and (width >= 960px) {
    font-size: 40px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 67px;
  }

  &--left {
    @extend .section-title;
    text-align: left;
    padding: 0;
  }
}

.description-section-title {
  @extend .section-title;

  font-size: 21px;

  @media only screen and (width >= 600px) {
    font-size: 26px;
  }

  @media only screen and (width >= 960px) {
    font-size: 28px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 38px;
  }
}

.section-sub_title {
  color: rgb(var(--v-theme-primaryLight));
  font-size: 18px;
  text-align: center;
  margin-block: 10px;

  @media only screen and (width >= 600px) {
    font-size: 21px;
  }

  @media only screen and (width >= 960px) {
    font-size: 23px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 25px;
  }

  &--left {
    @extend .section-sub_title;
    text-align: left;
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
    font-size: 16px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 25px;
  }
}

</style>
