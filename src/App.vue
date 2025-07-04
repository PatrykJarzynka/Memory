<template>
  <v-app theme="lightTheme">
    <v-container class="main-container">
      <Header/>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.main-container {
  @media only screen and (min-width: 1920px) {
    max-width: 1500px;
  }
}
</style>
