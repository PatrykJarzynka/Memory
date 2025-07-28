<script setup lang="ts">

  import type { FamilyMember } from "@/interfaces/FamilyMember.ts"
  import { useI18n } from "vue-i18n"
  import FamilyMemberItem from "@/components/FamilyMemberItem.vue"

  const { t } = useI18n()
  const base = import.meta.env.BASE_URL;

  const familyMembers = computed<FamilyMember[]>(() => [
    {
      name: "Kacper Libera",
      description: t("familyMembers.brother"),
      psen: true,
      imageUrl: `${base}images/kacper-profile.JPG`,
    },
    {
      name: "Jagoda Libera",
      description: t("familyMembers.sister"),
      psen: true,
      imageUrl: `${base}images/jagoda-profile.JPG`,
    },
    {
      name: "Monika Remplewska",
      description: t("familyMembers.aunt"),
      psen: true,
      imageUrl: `${base}images/monika-profile.JPG`,
    },
    {
      name: "Aleksandra Libera",
      description: t("familyMembers.sister"),
      psen: false,
      imageUrl: `${base}images/ola-profile.JPG`,
    },
    {
      name: "Gwidon Libera",
      description: t("familyMembers.father"),
      psen: false,
      imageUrl: `${base}images/gwidon-profile.JPG`,
    },
  ])
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
  padding: 0;
}

</style>
