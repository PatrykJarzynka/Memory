<script setup lang="ts">
  interface TreatmentItem {
    id: number;
    name: string;
    price: number | null;
  }

  const treatmentItems: TreatmentItem[] = [
    {
      id: 1,
      name: "Donanemab",
      price: 130_000,
    },
    {
      id: 2,
      name: "Gantenerumab",
      price: null,
    },
    {
      id: 3,
      name: "Lecanamab",
      price: 98_000,
    },
  ]

  function splitNumber (value: number): string {
    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }
</script>

<template>
  <div class="treatment-container">
    <div class="treatment-list-container">
      <div
        v-for="(item, index) in treatmentItems"
        :key="item.id"
        class="treatment-item-container"
      >
        <div class="treatment-item">
          <p class="treatment-name">{{ item.name }}</p>

          <p
            v-if="item.price"
            class="treatment-price"
          >
            {{ splitNumber(item.price) }} PLN / rok
          </p>

          <p
            v-else
            class="treatment-price"
          >
            testowy / eksperymentalny
          </p>
        </div>

        <div
          v-if="index !== treatmentItems.length - 1"
          class="separator"
        />
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

  @media only screen and (width >= 960px) {
    flex-direction: row;
    align-items: stretch;
    padding-block: 60px;
  }
}

.treatment-item-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media only screen and (width >= 960px) {
    flex-direction: row;
    width: initial;
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
  padding-inline: 25px;
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
    height: 100%;
  }
}

.treatment-link {
  color: white;
}
</style>
