<template>
  <v-container class="main-container">
    <Hero/>

    <div class="psen-members-container">
      <p>Alzheimer o wczesnym początku (PSEN-1)</p>

      <v-row
        class="family-section"
        no-gutters
      >
        <v-col
          v-for="(member, index) in familyMembers.slice(0,3)"
          :key="member.name"
          cols="12"
          :sm="index === 2 ? 8 : 6"
          lg="4"
          class="family-col--psen"
        >
          <div style="padding: 10px; height: 100%">
            <FamilyMemberCard
              :member="member"
            />
          </div>

        </v-col>
      </v-row>
    </div>

    <v-row class="family-section">
      <v-col
        v-for="member in familyMembers.slice(3,5)"
        :key="member.name"
        class="family-col--psen"
        cols="12"
        sm="6"
        md="6"
      >
        <FamilyMemberCard
          :member="member"
        />
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts" setup>

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

</script>

<style lang="scss" scoped>
.main-container {
  @media only screen and (width > 1280px) {
    max-width: 1500px;
  }
}

.psen-members-container {
  margin-top: 20px;
  padding-top: 10px;
  border-radius: 24px;
  text-align: center;
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  border: 3px solid rgb(var(--v-theme-primary));
}

.family-section {
  justify-content: center;
  padding-block: 20px;
}

.test {
  justify-content: center;
}

.family-col {
  row-gap: 20px;

  &--psen {
    @extend .family-col;
    position: relative;
  }

  &--no-psen {
    @extend .family-col;
    justify-content: space-evenly;
  }
}

.indicator {
  position: absolute;
  right:10px;
  top: 10px;
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
}

</style>
