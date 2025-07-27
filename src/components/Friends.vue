<script setup lang="ts">
  const friends = [
    {
      id: 1,
      name: "Patryk Jarzynka",
      association: null,
      description: "Programista i przyjaciel, który z zaangażowaniem tworzy naszą stronę internetową, dbając o to, by była nie tylko funkcjonalna, ale i pełna serca.",
    },
    {
      id: 2,
      name: "Aleksandra Bratek",
      association: null,
      description: "Przyjaciółka i lekarka w trakcie specjalizacji urologicznej. Z ogromnym zaangażowaniem wspiera w poszukiwaniu leczenia choroby.",
    },
    {
      id: 3,
      name: "Aleksandra Dzierżawa",
      association: null,
      description: "Terapeutka, przyjaciółka. Ogromne wsparcie w naszych działaniach i organizacji.",
    },
    {
      id: 4,
      name: "Jarosław Szlachta",
      association: "SuperHumans",
      description: "Twórca systemu walki S.A.R.24. Wspiera naszą inicjatywę na wielu poziomach.",
    },
  ]
</script>

<template>
  <v-row
    no-gutters
    class="justify-center"
  >
    <v-col
      v-for="friend in friends"
      :key="friend.id"
      class="pa-3 reveal-zoom-in"
      cols="12"
      sm="6"
      lg="4"
    >
      <v-card
        class="friend-card"
        variant="outlined"
        elevation="5"
      >
        <v-card-title class="friend-card-title-container">
          <div class="image-placeholder">
            <v-icon icon="mdi-account-circle" class="image-icon"/>
          </div>

          <div class="friend-card-title">
            <p>{{ friend.name }}</p>

            <p
              v-if="friend.association"
              class="association"
            >
              {{ friend.association }}
            </p>
          </div>

        </v-card-title>

        <v-card-text class="friend-card-content">{{ friend.description }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.friend-card {
  display: flex;
  flex-direction: column;
  aspect-ratio: 1.5;
  border-radius: 20px;
  border: none;

  @media only screen and (width >= 600px) {
    aspect-ratio: 1;
  }

  @media only screen and (width >= 960px) {
    aspect-ratio: 1.5;
  }
}

.friend-card-title-container {
  display: flex;
  gap: 15px;
  padding: 15px;
  text-align: center;
  white-space: wrap;
  background-color: rgb(var(--v-theme-primary));
  box-shadow: rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset, rgba(207, 231, 255, 0.1) 0px -1px 1px 0px inset;
  border-radius: 16px;
}

.friend-card-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(var(--v-theme-primaryContrast));
  font-size: 16px;
  text-align: left;

  @media only screen and (width >= 600px) {
    font-size: 17px;
  }
}

.association {
  font-size: 14px;
}

.image-placeholder {
  width: 40px;
  height: 40px;
  background-color: rgb(var(--v-theme-highlight));
  border-radius: 8px;
  box-shadow: rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset;
  padding:4px;

  @media only screen and (width >= 600px) {
    width: 50px;
    height: 50px;
  }
}

.image-icon {
  width: 100%;
  height: 100%;
  font-size: 30px;
}

.friend-card-content {
  display: flex;
  align-items: center;
  text-align: justify;
  color: rgb(var(--v-theme-primary));
  font-size: 15px;
  padding: 25px;

  @media only screen and (width >= 600px) {
    font-size: 16px;
  }

  @media only screen and (width >= 960px) {
    font-size: 18px;
  }
}
</style>
