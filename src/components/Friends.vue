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
    iconUrl: "./assets/SuperHumans.svg",
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
        <div class="friend-card-container">

          <img
            width="100"
            v-if="friend.iconUrl"
            :src="friend.iconUrl"
            alt="Association image"
            class="friend-card-association-image"
          />

          <v-icon
            v-else
            class="friend-card-icon"
            icon="mdi-account"
          />

          <v-card-title class="friend-card-title"> {{`${friend.name} ${friend.surname}`}}</v-card-title>
          <v-card-subtitle
            v-if="friend.association"
            class="friend-card-association"
          >
            {{friend.association}}
          </v-card-subtitle>

        </div>

        <v-card-text class="card-content">
          {{ friend.description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.friend-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1.9;
  border-radius: 20px;
  background-color: rgb(var(--v-theme-primary));
  border: none;
  padding: 20px;

  @media only screen and (width >= 600px) {
    aspect-ratio: 1.2;
    padding: 10px;
  }

  @media only screen and (width >= 960px) {
    aspect-ratio: 2;
    padding: 20px;
  }
}

.friend-card-container {
  display: grid;
  grid-template-rows: 50% 30% 10%;
  height: 100%;
  position: absolute;
  transition: transform 0.6s ease;
  padding: 20px;
}

.friend-card-icon {
  justify-self: center;
  align-self: center;
  border-radius: 50%;
  border: thin solid;
  padding: 35px;
  font-size: 50px;
  color: rgb(var(--v-theme-background));
  opacity: 0.5;

  transition: transform 0.6s ease, opacity 0.6s ease;

  @media only screen and (width >= 600px) {
    font-size: 70px;
    padding: 45px;
  }

  @media only screen and (width >= 960px) {
    font-size: 60px;
    padding: 40px;
  }
}

.friend-card-association-image {
  justify-self: center;
  border-radius: 10px;
  width: 35%;
  align-self: center;

  transition: transform 0.6s ease, opacity 0.6s ease;

  @media only screen and (width >= 600px) {
    width: 50%;
  }

  @media only screen and (width >= 960px) {
    width: 35%;
  }
}


.friend-card-title {
  margin-top: 20px;
  color: rgb(var(--v-theme-background));
  font-size: 23px;
  justify-self: center;
  align-self: center;

  transition: transform 0.6s ease, opacity 0.6s ease;

  @media only screen and (width >= 960px) {
    font-size: 25px;
  }
}

.friend-card-association {
  margin-top: 10px;
  justify-self: center;
  align-self: center;
  color: rgb(var(--v-theme-background));

  transition: transform 0.6s ease, opacity 0.6s ease;
}

.card-content {
  text-align: center;
  background-color: rgb(var(--v-theme-background));
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;

  font-size: 17px;
  color: rgb(var(--v-theme-primary));

  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.6s ease, transform 0.6s ease;

  @media only screen and (width >= 600px) {
    font-size: 16px;
  }

  @media only screen and (width >= 960px) {
    font-size: 18px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 20px;
  }
}


.friend-card:hover {
  .friend-card-association-image,
  .friend-card-icon {
    transform: translateY(-120%);
    opacity: 0;
  }

  .friend-card-title {
    transform: translateY(120%);
    opacity: 0;
  }

  .friend-card-association {
    transform: translateY(290%);
    opacity: 0;
  }
}

.friend-card:hover .card-content {
  opacity: 1;
  transform: scale(1);
}

</style>
