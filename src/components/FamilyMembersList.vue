<script setup lang="ts">

  import type { FamilyMember } from "@/interfaces/FamilyMember.ts"
  import FamilyMemberItem from "@/components/FamilyMemberItem.vue"

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
  <v-list class="family-members-list">
    <div
      v-for="member in familyMembers.slice(0,3)"
      :key="member.name"
    >
      <FamilyMemberItem :member="member"/>
      <v-divider/>
    </div>

    <div
      v-for="member in familyMembers.slice(3,5)"
      :key="member.name"
    >
      <FamilyMemberItem :member="member"/>

      <v-divider/>
    </div>

  </v-list>
</template>

<style scoped lang="scss">

.family-members-list {
  background-color: transparent;
  width: 100%;
  flex-direction: column;
  display: flex;
}

</style>
