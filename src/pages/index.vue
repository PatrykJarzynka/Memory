<template>

  <Hero/>

  <v-container class="test-container">
    <v-row no-gutters class="family-container">
      <v-col
        v-for="member in familyMembers"
        :key="member.name"
        cols="2"
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
      description: "Alzheimer o wczesnym początku",
      psen: true,
      imageUrl: "/images/kacper2.JPG",
    },
    {
      name: "Jagoda Libera",
      description: "Alzheimer o wczesnym początku",
      psen: true,
      imageUrl: "/images/jagoda2.JPG",
    },
    {
      name: "Monika Remplewska",
      description: "Alzheimer o wczesnym początku",
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
      description: "Tata dzieci z Alzheimerem o wczesnym początku",
      psen: false,
      imageUrl: "/images/gwidon2.JPG",
    },

  ]

</script>

<style lang="scss" scoped>
.test-container {
  @media only screen and (width > 1280px) {
    max-width: 1500px;
  }
}

.family-container {
  width: 100%;
  justify-content: space-evenly;
}

.testCol {
  width: 20%;
}
</style>
