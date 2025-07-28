import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSectionTracker(ids: string[], topOffset = 100) {
  const activeSectionId = ref<string>('start')

  function onScroll() {
    const scrollY = window.scrollY + topOffset

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollY) {
        activeSectionId.value = id
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
    onScroll() // na start
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { activeSectionId }
}
