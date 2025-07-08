<script setup lang="ts">
  interface Props {
    member: FamilyMember;
  }

  defineProps<Props>()
</script>

<template>
  <v-card class="family-member-card">

    <v-img
      position="top"
      class="card-image"
      :src="member.imageUrl"
      cover
    />

    <v-card-title>{{ member.name }}</v-card-title>

    <v-card-text>{{ member.description }}</v-card-text>

    <span
      v-if="member.psen"
      class="indicator"
    >
      PSEN
    </span>

  </v-card>
</template>

<style scoped lang="scss">
  .family-member-card {
    border-radius: 15px;
    height: 100%;
    position: relative;
  }

  .indicator {
    position: absolute;
    right: 8px;
    bottom: 5px;
    color: rgb(var(--v-theme-primary));
    font-weight: 500;
  }
</style>
