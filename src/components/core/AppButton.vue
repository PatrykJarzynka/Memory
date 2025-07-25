<script setup lang="ts">

  import { useDisplay } from "vuetify/framework"

  type ButtonType = "flat" | "normal"

  interface Props {
    type: ButtonType;
    text: string | undefined;
    icon?: string;
  }

  defineProps<Props>()
  const { xl, xs } = useDisplay()

  const buttonSize = computed((): string | undefined => {
    if (xl.value) {
      return "large"
    } else if (xs.value) {
      return "small"
    } else {
      return undefined
    }
  })
</script>

<template>
  <v-btn
    :variant="type === 'flat' ? 'text' : 'elevated'"
    :size="buttonSize"
    :class="type === 'flat' ? 'app-button--flat' : 'app-button' "
  >
    {{ text }}

    <template v-if="icon" #append>
      <v-icon :icon="icon"/>
    </template>
  </v-btn>
</template>

<style scoped lang="scss">

.app-button {
  text-transform: none;
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  font-family: Rubik, "sans-serif";
  font-size: 12px;

  &--flat {
    @extend .app-button;
    color: white;
  }

  @media only screen and (width >= 600px) {
    font-size: 14px;
  }

  @media only screen and (width >= 1280px) {
    font-size: initial;
  }
}

</style>
