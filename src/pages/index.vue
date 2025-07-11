<template>
  <v-container class="main-container">
    <Hero/>

    <div class="d-flex flex-column align-center ga-3">
      <h2 class="section-title">Historia choroby w naszej rodzinie</h2>
      <h3 class="section-sub_title">Choroba Alzheimera o wczesnym początku od lat niszczy naszą rodzinę:</h3>

      <div class="d-flex flex-column align-center ga-8">
        <v-row
          no-gutters
          class="family-container"
        >
          <v-col
            cols="12"
            sm="10"
            md="6"
            class="d-flex justify-center"
          >
            <div class="images-container">
              <v-img cover class="image big-image" src="/images/kacper2.JPG"/>
              <v-img aspect-ratio="1" cover class="image" src="/images/kacper2.JPG"/>
              <v-img aspect-ratio="1" cover class="image" src="/images/kacper2.JPG"/>
            </div>
          </v-col>

          <v-col
            class="d-flex justify-center"
            cols="12"
            md="5"
          >
            <v-list class="family-members-list">
              <div class="psen-members">
                <span class="indicator">PSEN 1</span>

                <v-list-item
                  v-for="member in familyMembers.slice(0,3)"
                  :key="member.name"
                >
                  <v-row
                    no-gutters
                    class="family-members-list-row justify-center"
                  >
                    <v-col
                      cols="4"
                      sm="3"
                      class="image-column"
                    >
                      <v-img
                        cover
                        aspect-ratio="1"
                        src="/images/kacper2.JPG"
                        class="family-member-image"
                      />
                    </v-col>

                    <v-col
                      cols="3"
                      md="6"
                      class="family-member-text-container"
                    >
                      <p class="family-member-name">{{ member.name }}</p>
                      <p class=" family-member-description">{{ member.description }}</p>
                    </v-col>
                  </v-row>
                </v-list-item>
              </div>

              <v-list-item
                v-for="member in familyMembers.slice(3,5)"
                :key="member.name"
              >
                <v-row
                  no-gutters
                  class="family-members-list-row justify-center"
                >
                  <v-col
                    cols="4"
                    sm="3"
                    class="image-column"
                  >
                    <v-img
                      cover
                      aspect-ratio="1"
                      src="/images/kacper2.JPG"
                      class="family-member-image"
                    />
                  </v-col>

                  <v-col
                    cols="3"
                    md="6"
                    class="family-member-text-container"
                  >
                    <p class="family-member-name">{{ member.name }}</p>
                    <p class=" family-member-description">{{ member.description }}</p>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

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

    <div>
      <h2 class="section-title">Rokowania i co możemy zrobić obecnie</h2>
      <h3 class="section-sub_title">Posiadając gen PSEN1 mamy pewność wystąpienia choroby Alzheimera.</h3>

      <v-row class="possibilities-container">
        <v-col
          v-for="possibility in possibilities"
          :key="possibility.text"
          cols="4"
        >
          <v-card
            elevation="0"
            class="possibility-card"
          >
            <v-avatar class="possibilities-icon" size="90">
              <v-icon
                size="60"
                :icon="possibility.icon"
              />
            </v-avatar>

            <v-card-title>{{ possibility.text }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </v-container>

</template>

<script lang="ts" setup>

  import type { FamilyMember } from "@/interfaces/FamilyMember.ts"
  import FamilyTimeline from "@/components/FamilyTimeline.vue"
  import IllustratedContent from "@/components/IllustratedContent.vue"

  const familyMembers: FamilyMember[] = [
    {
      name: "Kacper Libera",
      description: "Brat",
      psen: true,
      imageUrl: "/images/kacper2.JPG",
    },
    {
      name: "Jagoda Libera",
      description: "Siostra",
      psen: true,
      imageUrl: "/images/jagoda2.JPG",
    },
    {
      name: "Monika Remplewska",
      description: "Ciocia",
      psen: true,
      imageUrl: "/images/monika.jpeg",
    },
    {
      name: "Aleksandra Libera",
      description: "Siostra",
      psen: false,
      imageUrl: "/images/ola2.JPG",
    },
    {
      name: "Gwidon Libera",
      description: "Tata",
      psen: false,
      imageUrl: "/images/gwidon2.JPG",
    },
  ]

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
  row-gap: 100px;
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

.family-container {
  width: 100%;
  justify-content: space-around;
  row-gap: 30px;
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

.image {
  border-radius: 24px;
}

.big-image {
  grid-row: span 2;
}

.family-members-list {
  background-color: transparent;
  width: 100%;
  row-gap: 10px;
  flex-direction: column;
  display: flex;
}

.psen-members {
  border: 3px solid rgb(var(--v-theme-primary));
  border-radius: 24px;
  position: relative;
}

.indicator {
  position: absolute;
  right: 10px;
  top: 5px;
  font-weight: 500;
  font-size: 15px;
  color: rgb(var(--v-theme-primary));

  @media only screen and (width >= 600px) {
    font-size: 18px;
    right: 15px;
    top: 10px;
  }

  @media only screen and (width >= 960px) {
    font-size: 14px;
    right: 10px;
    top: 2px;
  }
}

.family-members-list-row {
  column-gap: 30px;
}

.image-column {
  @media only screen and (width >= 1280px) {
    flex: 0 0 23%;
  }
}

.family-member-image {
  border-radius: 50%;
}

.family-member-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.family-member-name {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 18px;

  @media only screen and (width >= 600px) {
    font-size: 19px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 21px;
  }
}

.family-member-description {
  color: rgb(var(--v-theme-primary));
  font-weight: 400;
  font-size: 16px;

  @media only screen and (width >= 600px) {
    font-size: 18px;
  }

  @media only screen and (width >= 960px) {
    font-size: 18pxpx;
  }
}

.possibilities-container {
  justify-content: center;
}

.possibility-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
}

.possibilities-icon {
  border: 1px solid black;
  border-radius: 50%;
}

</style>
