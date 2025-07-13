<script setup lang="ts">

  import type { FamilyMember } from "@/interfaces/FamilyMember.ts"

  interface Props {
    member: FamilyMember;
  }

  defineProps<Props>()
</script>

<template>
  <v-list-item>
    <v-row
      no-gutters
      class="family-members-list-row"
    >
      <v-col
        cols="4"
        sm="3"
        class="image-column"
      >
        <v-img
          cover
          aspect-ratio="1"
          :src="member.imageUrl"
          class="family-member-image"
        />
      </v-col>

      <v-col
        cols="3"
        md="6"
        class="family-member-text-container"
      >
        <p class="family-member-name">{{ member.name }}</p>
        <p class="family-member-description">{{ member.description }}</p>
      </v-col>

      <span
        v-if="member.psen"
        class="indicator"
      >
        PSEN 1
      </span>
    </v-row>
  </v-list-item>
</template>

<style scoped lang="scss">

.family-members-list-row {
  padding-block: 5px;
  column-gap: 30px;
  position: relative;
  justify-content: start;

  @media only screen and (width >= 600px) {
    justify-content: center;
  }
}

.image-column {
  @media only screen and (width >= 1280px) {
    flex: 0 0 23%;
  }
}

.family-member-image {
  border-radius: 50%;
}

.family-member-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.family-member-name {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-size: 18px;

  @media only screen and (width >= 600px) {
    font-size: 19px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 21px;
  }
}

.family-member-description {
  color: rgb(var(--v-theme-primary));
  font-weight: 400;
  font-size: 16px;

  @media only screen and (width >= 600px) {
    font-size: 18px;
  }

  @media only screen and (width >= 960px) {
    font-size: 18pxpx;
  }
}

.indicator {
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-weight: 500;
  font-size: 15px;
  color: rgb(var(--v-theme-highlight));

  @media only screen and (width >= 600px) {
    font-size: 18px;
    right: 15px;
    bottom: 10px;
  }

  @media only screen and (width >= 960px) {
    font-size: 14px;
    right: 10px;
    bottom: 2px;
  }

  @media only screen and (width >= 1280px) {
    font-size: 17px;
  }
}

</style>
