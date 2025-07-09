<template>
  <v-container class="main-container">
    <Hero/>
    <FamilyMembers/>
  </v-container>

</template>

<script lang="ts" setup>

  import FamilyMembers from "@/components/FamilyMembers.vue"
</script>

<style lang="scss" scoped>
.main-container {
  @media only screen and (width > 1280px) {
    max-width: 1500px;
  }
}
</style>
