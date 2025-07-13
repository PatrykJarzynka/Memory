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

    <h2 class="section-title">Rokowania i co możemy obecnie zrobić</h2>
    <h3 class="section-sub_title">Posiadając gen PSEN1 mamy pewność wystąpienia choroby Alzheimera.</h3>

    <Possibilities/>

    <IconDivider/>

    <h2 class="section-title">Dostępne leki</h2>
  </v-container>

  <div class="treatment-container">
    <div class="treatment-list-container">
      <div class="treatment-item">
        <p class="treatment-name">Donanemab</p>
        <p class="treatment-price">130 000 PLN / rok</p>
      </div>

      <div class="separator"/>

      <div class="treatment-item">
        <p class="treatment-name">Gantenerumab</p>
        <p class="treatment-price">testowy / eksperymentalny</p>
      </div>

      <div class="separator"/>

      <div class="treatment-item">
        <p class="treatment-name">Lecanamab</p>
        <p class="treatment-price">98 000 PLN / rok</p>
      </div>
    </div>

    <p class="treatment-link">Dostęp do leków za pomocą www.medicine.washu.edu/</p>
  </div>

  <v-container class="main-container">
    <IconDivider/>

    <h2 class="section-title">Gdzie o nas mówiono</h2>

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


    <IconDivider/>

    <h2 class="section-title">Czego obecnie nam trzeba</h2>

    <IconDivider/>

    <h2 class="section-title">Nasi przyjaciele</h2>
  </v-container>



</template>

<script lang="ts" setup>

  import FamilyIllustrated from "@/components/FamilyIllustrated.vue"
  import FamilyTimeline from "@/components/FamilyTimeline.vue"
  import IconDivider from "@/components/IconDivider.vue"
  import IllustratedContent from "@/components/IllustratedContent.vue"
  import Possibilities from "@/components/Possibilities.vue"
  import {useDisplay} from "vuetify/framework";

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

.section-title {
  color: rgb(var(--v-theme-primary));
  font-size: 30px;
  text-align: center;

  @media only screen and (width >= 600px) {
    font-size: 35px;
  }

  @media only screen and (width >= 960px) {
    font-size: 40px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 45px;
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
  color: rgb(var(--v-theme-primary));
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
    font-size: 30px;
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

.treatment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--v-theme-primary));
  padding-block: 30px;
  text-align: center;
}

.treatment-list-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  column-gap: 50px;

  @media only screen and (width >= 960px) {
    flex-direction: row;
    align-items: stretch;
    padding-block: 60px;
  }
}

.treatment-item {
  font-family: Playfair Display, serif;
  color: white;
  display: flex;
  flex-direction: column;
  margin-block: 40px;
  text-align: center;
  row-gap: 30px;
}

.treatment-name {
  font-size: 28px;
}

.treatment-price {
  font-size: 22px;
}

.separator {
  width: 30%;
  height: 2px;
  background: white;

  @media only screen and (width >= 960px) {
    width: 1px;
    height: initial;
  }
}

.treatment-link {
  color: white;
}

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
