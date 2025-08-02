<script setup lang="ts">
  import type { TimelineEvent } from "@/interfaces/TimelineEvent.ts"

  import { useI18n } from "vue-i18n"
  import { useDisplay } from "vuetify/framework"

  const { smAndDown, mdAndUp } = useDisplay()
  const { t } = useI18n()

  function getTextAlignClassName (side: string): string {
    if (mdAndUp.value) {
      return "text-center"
    } else if (side === "start") {
      return "text-end"
    } else {
      return "text-start"
    }
  }
  const timelineEvents = computed<TimelineEvent[]>(() => [
    {
      id: 1,
      side: "end",
      icon: "mdi-coffin",
      eventDesc: t("familyHistory.event1"),
    },
    {
      id: 2,
      side: "start",
      icon: "mdi-coffin",
      eventDesc: t("familyHistory.event2"),
    },
    {
      id: 3,
      side: "end",
      icon: "mdi-hospital-box",
      eventDesc: t("familyHistory.event3"),
    },
    {
      id: 4,
      side: "start",
      icon: "mdi-needle",
      eventDesc: t("familyHistory.event4"),
    },
  ])
</script>

<template>
  <v-timeline
    class="reveal-slide-up"
    line-color="black"
    :direction="smAndDown ? 'vertical' : 'horizontal'"
  >
    <v-timeline-item
      class="timeline-item"
      v-for="event in timelineEvents"
      :key="event.id"
      :icon="event.icon"
      :side="smAndDown ? event.side : 'end'"
      fill-dot
    >
      <p
        :class="['event-description', getTextAlignClassName(event.side)]"
      >
        {{ event.eventDesc }}
      </p>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped lang="scss">
.event-description {
  font-weight: 500;
  color: rgb(var(--v-theme-background));
}

.timeline-item {
  :deep(.v-icon) {
    color: rgba(var(--v-theme-primary)) !important;
  }

  :deep(.v-timeline-divider__inner-dot) {
    background-color: var(--v-theme-background) !important;
  }
}
</style>
