<script setup lang="ts">
  import type { TimelineEvent } from "@/interfaces/TimelineEvent.ts"

  import { useDisplay } from "vuetify/framework"

  const { smAndDown, mdAndUp } = useDisplay()

  function getTextAlignClassName (side: string): string {
    if (mdAndUp.value) {
      return "text-center"
    } else if (side === "start") {
      return "text-end"
    } else {
      return "text-start"
    }
  }
  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      side: "end",
      icon: "mdi-skull",
      eventDesc: "Nasz dziadek (ojciec mamy) zmarł na tę samą chorobę po dekadzie całkowitej niesamodzielności.",
    },
    {
      id: 2,
      side: "start",
      icon: "mdi-skull",
      eventDesc: "Nasz wujek (brat Elżbiety i Moniki) zmarł na Alzheimera, zachorował będąc po czterdziestce.",
    },
    {
      id: 3,
      side: "end",
      icon: "mdi-hospital-box",
      eventDesc: "Nasza mama, Elżbieta, znajduje się dziś w stanie wegetatywnym, pierwsze objawy miała około 40r.ż.",
    },
    {
      id: 4,
      side: "start",
      icon: "mdi-needle",
      eventDesc: "U Jagody, Kacpra i Moniki potwierdzono mutacje genetyczne PSEN 1",
    },
  ]
</script>

<template>
  <v-timeline
    :direction="smAndDown ? 'vertical' : 'horizontal'"
  >
    <v-timeline-item
      v-for="event in timelineEvents"
      :key="event.id"
      :icon="event.icon"
      :side="smAndDown ? event.side : 'end'"
      dot-color="primary"
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
}
</style>
