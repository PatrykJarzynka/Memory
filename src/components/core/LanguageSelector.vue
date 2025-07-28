<script setup lang="ts">

  import type { Language } from "@/interfaces/Language.ts"
  import { useLocale } from "@/composables/useLocale.ts"
  import { LanguageType } from "@/enums/LanguageType.ts"

  const router = useRouter()
  const { selectedLanguage, supportedLanguages } = useLocale()

  function onLanguageClick (lang: Language): void {
    if (selectedLanguage.value && lang.type === selectedLanguage.value.type) {
      return
    }

    if (lang.type === LanguageType.PL) {
      router.push("/")
    } else {
      router.push(`/${lang.locale}`)
    }
  }
</script>

<template>
  <v-menu>
    <template #activator="{props}">
      <v-btn
        v-bind="props"
        class="language-button"
      >
        <v-img
          class="w-100"
          alt="Country flag"
          :src="selectedLanguage?.flagSvg"
        />

        <v-icon icon="mdi-menu-down"/>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="language in supportedLanguages"
        :key="language.type"
        class="pa-0"
      >
        <v-btn
          class="language-button"
          @click="onLanguageClick(language)"
        >
          <v-img
            class="w-100"
            :src="language.flagSvg"
          />
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped lang="scss">

.language-selector {
  display: flex;
  align-items: center;
  width: 60px;
}

.language-button {
  display: flex;
  :deep(.v-btn__content) {
    width: 100%;
  }
}

</style>
