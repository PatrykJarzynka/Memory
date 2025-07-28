<script setup lang="ts">
  import { useI18n } from "vue-i18n"

  const { t } = useI18n()
  const base = import.meta.env.BASE_URL;

  const friends = computed(() => [
    {
      id: 1,
      name: "Patryk Jarzynka",
      association: null,
      description: t("friends.friendDesc1"),
    },
    {
      id: 2,
      name: "Aleksandra Bratek",
      association: null,
      description: t("friends.friendDesc2"),
    },
    {
      id: 3,
      name: "Aleksandra Dzierżawa",
      association: null,
      description: t("friends.friendDesc3"),
    },
    {
      id: 4,
      name: "Jarosław Szlachta",
      association: "SuperHumans",
      description: t("friends.friendDesc4"),
      iconUrl: `${base}assets/SuperHumans.svg`,
    },
  ])
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
            <v-img
              v-if="friend.iconUrl"
              style="border-radius: 8px; height: 100%"
              cover
              :src="friend.iconUrl"
            />

            <v-icon
              v-else
              icon="mdi-account-circle"
              class="image-icon"
            />
          </div>

          <div class="friend-card-title">
            <p>{{ friend.name }}</p>

            <p
              class="association"
            >
              {{ friend.association ?? '' }}
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
  align-items: center;
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

  @media only screen and (width >= 600px) {

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
