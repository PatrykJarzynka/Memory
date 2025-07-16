<script setup lang="ts">

</script>

<template>
  <div class="treatment-container">
    <div class="treatment-list-container">
      <div class="treatment-item">
        <p class="treatment-name">Donanemab</p>
        <p class="treatment-price">130 000 PLN / rok</p>
      </div>

      <div class="separator"/>

      <div class="treatment-item">
        <p class="treatment-name">Gantenerumab</p>
        <p class="treatment-price">testowy / eksperymentalny</p>
      </div>

      <div class="separator"/>

      <div class="treatment-item">
        <p class="treatment-name">Lecanamab</p>
        <p class="treatment-price">98 000 PLN / rok</p>
      </div>
    </div>

    <p class="treatment-link">Dostęp do leków za pomocą www.medicine.washu.edu/</p>
  </div>
</template>

<style scoped lang="scss">
.treatment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--v-theme-primary));
  padding-block: 30px;
  text-align: center;
}

.treatment-list-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  column-gap: 50px;

  @media only screen and (width >= 960px) {
    flex-direction: row;
    align-items: stretch;
    padding-block: 60px;
  }
}

.treatment-item {
  font-family: Playfair Display, serif;
  color: white;
  display: flex;
  flex-direction: column;
  margin-block: 40px;
  text-align: center;
  row-gap: 30px;
}

.treatment-name {
  font-size: 28px;
}

.treatment-price {
  font-size: 22px;
}

.separator {
  width: 30%;
  height: 2px;
  background: white;

  @media only screen and (width >= 960px) {
    width: 1px;
    height: initial;
  }
}

.treatment-link {
  color: white;
}
</style>
