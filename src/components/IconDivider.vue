<script setup lang="ts">

</script>

<template>
  <div class="divider-container">
    <v-divider/>

    <v-icon class="divider-icon" size="60" icon="mdi-brain"/>

    <v-divider/>
  </div>

</template>

<style scoped lang="scss">

.divider-container {
  display: flex;
  align-items: center;
  width: 100%;
  padding-block: var(--v-space-vertical--sm);

  @media only screen and (width >= 600px) {
    padding-block: var(--v-space-vertical--md);
  }
}

.divider-icon {
  color: rgb(var(--v-theme-primary));
  padding-inline: 50px;
}

</style>
