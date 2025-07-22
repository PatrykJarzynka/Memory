<template>
  <v-container class="main-container">
    <Hero/>

    <v-row class="columns-row">
      <v-col class="column1">
        <div class="testClass">
          <p class="textHello">Udało nam się zebrać już: </p>
          <p class="textHello">2% celu! </p>

          <v-btn>Wesprzyj zbiórkę</v-btn>
        </div>

      </v-col>

    </v-row>

    <IconDivider/>

    <div class="d-flex flex-column align-center ga-3">
      <h2 class="section-title">Historia choroby w naszej rodzinie</h2>
      <FamilyIllustrated/>


    </div>
  </v-container>

  <div class="family-history-container">
    <v-container class="main-container">
      <h3 class="section-sub_title">Choroba Alzheimera o wczesnym początku od lat niszczy naszą rodzinę:</h3>
      <v-img src="/images/Family-structure.png" width="65%"/>

      <FamilyTimeline/>
    </v-container>

  </div>

  <v-container class="main-container">

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
      <v-col cols="12" md="6" :class="['d-flex align-center', smAndDown ? 'justify-center' : '']">
        <h2 class="section-title--left">Rokowania</h2>
      </v-col>

      <v-col cols="10" md="6" class="d-flex align-center">
        <h3 :class="['section-sub_title--left', smAndDown ? 'text-center' : 'text-left']">Posiadając gen PSEN1 mamy pewność wystąpienia choroby Alzheimera.</h3>
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

    <Friends/>

  </v-container>

  <v-footer class="footer-container">
    <h2>Jeżeli masz pomysł, lub wiesz jak nam pomóc odezwij się</h2>

    <v-row>
      <v-col>
        <v-list>
          <v-list-item>Gwidon Libera – +48501525624</v-list-item>
          <v-list-item>Aleksandra Libera – +48507602660 / pamietnikalzheimerowca@gmail.com</v-list-item>
        </v-list>
      </v-col>

      <v-col>
        <p> Ze względu na duże obciążenie emocjonalne prosimy o ograniczenie kontaktu z Jagodą i Kacprem w tym temacie</p>
      </v-col>
    </v-row>

  </v-footer>

</template>

<script lang="ts" setup>

  import { useDisplay } from "vuetify/framework"
  import FamilyIllustrated from "@/components/FamilyIllustrated.vue"
  import Friends from "@/components/Friends.vue"
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
  align-items: center;
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
  color: white;
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

.footer-container {
  flex-direction: column;
  padding-block: 50px;
  justify-content: center;
  row-gap: 50px;
  background-color: rgb(var(--v-theme-primary));
}

.contact-container {
  text-align: center;
  width: 100%;
}

.columns-row {
  padding-top: 200px;
  padding-inline: 100px;
}

.column1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}

.textHello {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
}

.testClass {
  text-align: center;
}

.family-history-container {
  padding-block: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(var(--v-theme-primary));
}

</style>
