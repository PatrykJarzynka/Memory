<script setup lang="ts">
  import { useI18n } from "vue-i18n"

  const { t } = useI18n()

  const friends = computed(() => [
    {
      id: 1,
      name: "Patryk",
      surname: "Jarzynka",
      association: null,
      description: t("friends.friendDesc1"),
    },
    {
      id: 2,
      name: "Aleksandra",
      surname: "Bratek",
      association: null,
      description: t("friends.friendDesc2"),
    },
    {
      id: 3,
      name: "Jarosław",
      surname: "Szlachta",
      association: "SuperHumans",
      description: t("friends.friendDesc3"),
      iconUrl: "./src/assets/SuperHumans.svg",
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
        <v-row>
          <v-col cols="5">
            <v-img
              v-if="friend.iconUrl"
              :src="friend.iconUrl"
              alt="Association"
            />

            <div
              v-else
              class="icon-container"
            >
              <v-icon icon="mdi-handshake-outline"/>
            </div>
          </v-col>

          <v-col cols="6">
            <v-card-title class="friend-card-title">
              <span class="friend-name title-text">{{ friend.name }}</span>
              <span class="friend-surname title-text">{{ friend.surname }}</span>
            </v-card-title>
          </v-col>
        </v-row>

        <!--        <v-card-text class="card-content">-->
        <!--          {{ friend.description }}-->
        <!--        </v-card-text>-->
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.friend-card {
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1.9;
  border-radius: 20px;
  background-color: rgb(var(--v-theme-primary));
  border: none;
  padding: 20px;

  @media only screen and (width >= 600px) {
    aspect-ratio: 1;
  }

  @media only screen and (width >= 960px) {
    aspect-ratio: 2;
  }
}

.friend-card-title {
  text-align: center;
  justify-content: center;
  gap: 10px;
  height: 100%;

  color: rgb(var(--v-theme-primaryContrast));
  font-size: 15px;
}

.card-content {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.6s ease, transform 0.6s ease;
  text-align: center;
  background-color: rgb(var(--v-theme-primaryContrast));
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgb(var(--v-theme-primary));

  @media only screen and (width >= 600px) {
    font-size: 20px;
  }
}

.title-text {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.friend-card:hover .friend-name {
  transform: translateY(-120%);
  opacity: 0;
}

.friend-card:hover .friend-surname {
  transform: translateY(120%);
  opacity: 0;
}

.friend-card:hover .card-content {
  opacity: 1;
  transform: scale(1);
}

</style>
