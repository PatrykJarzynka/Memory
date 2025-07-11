<template>
  <v-container class="main-container">
    <Hero/>

    <IconDivider/>

    <div class="d-flex flex-column align-center ga-3">
      <h2 class="section-title">Historia choroby w naszej rodzinie</h2>
      <h3 class="section-sub_title">Choroba Alzheimera o wczesnym początku od lat niszczy naszą rodzinę:</h3>

      <div class="d-flex flex-column align-center ga-16">
        <FamilyIllustrated/>

        <FamilyTimeline/>
      </div>
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

    <div>
      <h2 class="section-title">Rokowania i co możemy zrobić obecnie</h2>
      <h3 class="section-sub_title">Posiadając gen PSEN1 mamy pewność wystąpienia choroby Alzheimera.</h3>

      <v-row class="possibilities-container">
        <v-col
          v-for="possibility in possibilities"
          :key="possibility.text"
          cols="12"
          sm="4"
        >
          <v-card
            elevation="2"
            class="possibility-card"
          >
            <v-avatar class="possibilities-icon-container">
              <v-icon
                :icon="possibility.icon"
                class="possibilities-icon"
              />
            </v-avatar>

            <v-card-title class="possibility-text">{{ possibility.text }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </v-container>

</template>

<script lang="ts" setup>

  import FamilyIllustrated from "@/components/FamilyIllustrated.vue"
  import FamilyTimeline from "@/components/FamilyTimeline.vue"
  import IconDivider from "@/components/IconDivider.vue"
  import IllustratedContent from "@/components/IllustratedContent.vue"

  const possibilities = [
    {
      icon: "mdi-brain",
      text: "Trening funkcji poznawczych",
    },
    {
      icon: "mdi-dumbbell",
      text: "Trening siłowy",
    },
    {
      icon: "mdi-food-apple",
      text: "Odpowiednia dieta",
    },
    {
      icon: "mdi-emoticon",
      text: "Pozytywne nastawienie",
    },
    {
      icon: "mdi-pill",
      text: "Wczesna reakcja farmakologiczna",
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

.possibilities-container {
  padding-block: 50px;
  justify-content: center;
}

.possibility-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding-block: 50px;
  border-radius: 24px;
  height: 100%;

  @media only screen and (width >= 600px) {
    padding-block: 30px;
  }
}

.possibility-card:hover {
  background-color: rgb(var(--v-theme-primary));

  .possibilities-icon-container {
    color: white;
  }

  .possibility-text {
    color: white;
  }
}

.possibility-text {
  white-space: wrap;
  text-align: center;
  display: flex;
  flex: 1;
  align-items: center;

  @media only screen and (width >= 600px) {
    font-size: 15px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 20px;
  }
}

.possibilities-icon-container {
  border: 2px solid rgb(var(--v-theme-highlight));
  border-radius: 50%;
  color: rgb(var(--v-theme-primary));
  width: 90px;
  height: 90px;

  @media only screen and (width >= 600px) {
    width: 60px;
    height: 60px;
  }

  @media only screen and (width >= 1280px) {
    width: 90px;
    height: 90px;
  }
}

.possibilities-icon {
  font-size: 60px;

  @media only screen and (width >= 600px) {
    font-size: 45px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 60px;
  }
}

</style>
