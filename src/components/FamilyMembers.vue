<script setup lang="ts">
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

<template>
  <div class="family-members-container">
    <div class="psen-members-container">
      <p class="psen-title">Alzheimer o wczesnym początku (PSEN-1)</p>

      <v-row
        no-gutters
        class="justify-center"
      >
        <v-col
          v-for="(member, index) in familyMembers.slice(0,3)"
          :key="member.name"
          cols="12"
          :sm="index === 2 ? 8 : 6"
          lg="4"
        >
          <div style="padding: 10px; height: 100%">
            <FamilyMemberCard
              :member="member"
            />
          </div>

        </v-col>
      </v-row>
    </div>

    <v-row gutters>
      <v-col
        v-for="member in familyMembers.slice(3,5)"
        :key="member.name"
        cols="12"
        sm="6"
        md="6"
      >
        <FamilyMemberCard
          :member="member"
        />
      </v-col>
    </v-row>
  </div>

</template>

<style scoped lang="scss">
.psen-title {
  @media only screen and (width < 600px) {
    font-size: 15px;
  }
}

.family-members-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
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

</style>
