import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal(selectors: string[], classToAdd = 'visible', options = { threshold: 0.1 }) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll<HTMLElement>(selector)))
    if (!elements.length) return

    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd)
          obs.unobserve(entry.target)
        }
      })
    }, options)

    elements.forEach(el => observer!.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
