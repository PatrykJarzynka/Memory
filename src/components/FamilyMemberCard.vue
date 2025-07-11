<script setup lang="ts">
  import type { VImg } from "vuetify/components"
  import type { FamilyMember } from "@/interfaces/FamilyMember.ts"

  interface Props {
    member: FamilyMember;
  }

  defineProps<Props>()
</script>

<template>

  <v-card
    elevation="4"
    class="family-member-card"
  >

    <v-img
      class="card-image"
      :src="member.imageUrl"
      cover
      position="center"
    />

    <div class="flex-1-0-0">
      <v-card-title class="title">{{ member.name }} </v-card-title>

      <v-card-text class="description">{{ member.description }}</v-card-text>
    </div>

  </v-card>
</template>

<style scoped lang="scss">
  .family-member-card {
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    height: 100%;
    border-radius: 20px;
  }

  .title {
    color:rgb(var(--v-theme-primary));
    text-align: center;
    font-size: 1.2rem;
    white-space: normal;

    @media only screen and (width >= 960px) {
      font-size: 1.25rem;
    }
  }

  .description {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.25rem;
    justify-content: center;
    color:rgb(var(--v-theme-primary));
  }

  .card-image {
    width: 110px;
    height: 110px;
    border-radius: 130px;
    flex: initial;

    @media only screen and (width >= 600px) {
      width: 120px;
      height: 120px;
    }

    @media only screen and (width >= 960px) {
      width: 100px;
      height: 100px;
    }

    @media only screen and (width >= 1280px) {
      width: 130px;
      height: 130px;
    }
  }

</style>
